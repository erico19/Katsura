from flask import Flask, render_template, request
from flask_cors import CORS
import numpy as np
import pandas as pd
import requests
import os
import json
from requests.auth import HTTPBasicAuth
import datetime
import pytz
from datetime import timedelta
from apscheduler.schedulers.background import BackgroundScheduler

app = Flask(__name__)
CORS(app)

sched = BackgroundScheduler(daemon=True)

# Set default timezone to Japan Time Zone
jst = pytz.timezone('Asia/Tokyo')

# Define function to round the time ------------------------------------------------------------------------
def roundTime(dt, roundTo=15):
    ''' This function ensures that the time is in blocks of 'roundTo' seconds '''
    dt = dt - datetime.timedelta(minutes=dt.minute % roundTo,
                                seconds=dt.second,
                                microseconds=dt.microsecond)

    return dt


# Read in the required csv file and format that columns appropriately ----------------------------
historical_averages = {}
files = os.listdir("historical_averages")
for file in files:
    print("File: ", file)
    df = pd.read_csv("historical_averages/"+file)
    df['Time'] = pd.to_datetime(df['Time'])
    df['Time'] = df['Time'].apply(lambda x: x.time())
    historical_averages[file] = df
    # print(df)

# Keep a dictionary of the days of the week to be used in getting the 
# corresponding averages
week_days = {0:"Monday", 1:"Tuesday", 2:"Wednesday", 3:"Thursday", 4:"Friday", 5:"Saturday", 6:"Sunday"}

# This variable will store the preloaded live data
LIVE_DATA = [pd.DataFrame({})]
TIME = [datetime.datetime.now(jst)]
SENSOR = "AMPM18-KJ016"

@app.route("/day_average", defaults={'sensor':SENSOR})
@app.route("/day_average/<sensor>")
def get_day_average(sensor):
    df = historical_averages[sensor+".csv"]
    time = datetime.datetime.now(jst)
    day = time.weekday()

    try:
        day = week_days[int(day)]
        message = "SUCCESS"
        day_average = df[['Time', day]]
        day_average = day_average.rename(columns={"Time":"time", day:"count"})
        data = day_average.to_json(orient='records')
        data = json.loads(data)
    except:
        message = "INVALID_DATE"
        data = {}

    TIME[0] = time
    
    return {"message":message, "data":data, "sensor": sensor}


def get_live_data(time):
    timeCode = time.strftime("%H") + time.strftime("%M")
    dataURL = 'http://153.127.3.13/katsura/csv/5min/' + timeCode + '.csv'
    print("Data URL: ", dataURL)
    response = requests.get(dataURL, auth=HTTPBasicAuth('katsura', 'katsura'), stream=True, timeout=45)
    df = pd.read_csv(response.raw)
    df['TIMESTAMP'] = pd.to_datetime(df['TIMESTAMP'])
    df['TIMESTAMP'] = df['TIMESTAMP'].dt.tz_localize("Asia/Tokyo")

    return df


def get_aggregated_data(live_data, aggregate=60, time=TIME):
    time = time[0]
    time = roundTime(time, roundTo=5)
    print("Time: ", time)

    df = pd.DataFrame({})
    for i in range(12):
        print("Fetching data...")
        df_temp = get_live_data(time)
        df = pd.concat([df_temp, df])
        time = time - timedelta(minutes=5)
    
    live_data[0] = df.reset_index(drop=True)

    return df


def count_users(df, sensor):
    if sensor != None:
        df = df[df['AMPID']==sensor]
    df = df.reset_index(drop=True)
    count = len(df.AMAC.unique())
    return (df,count)


def test_scheduler(live_data=LIVE_DATA):
    print("This is the current live_data\n", live_data[0])
    print("bleble", live_data)
    return 0


test_scheduler(LIVE_DATA)
get_aggregated_data(LIVE_DATA)
print(LIVE_DATA)
sched.add_job(test_scheduler, 'interval', seconds=50, args=[LIVE_DATA])
sched.add_job(get_aggregated_data,'interval', minutes=2, args=[LIVE_DATA])


CAFE_SENSORS = ["AMPM18-KJ010", "AMPM18-KJ016", "AMPM18-KJ017"]

@app.route("/service-level-api", defaults={'sensor':SENSOR})
@app.route("/service-level-api/<sensor>")
def service_level(sensor, live_data=LIVE_DATA, time=TIME):
    time = TIME[0]

    df = live_data[0]

    if sensor in CAFE_SENSORS:
        start = roundTime(time, roundTo=5)   
        end = start - timedelta(minutes=15)
        df = df[df['TIMESTAMP'] >= end]
        time = roundTime(time, roundTo=15)
    else:
        time = roundTime(time, roundTo=60)

    df,count = count_users(df, sensor=sensor)
    print("Count: ", count)
    
    time_to_display = time.strftime('%A, %B %d, %Y')
    time = "{:02d}:{:02d}".format(time.hour, time.minute)
    print("Returned time: ", time)

    # return df.to_html()
    response = {"sensor":sensor, 
                "time": time,
                "count":count,
                "time_to_display": time_to_display}

    return response

sched.start()

if __name__ == "__main__":
    app.run(debug=True)