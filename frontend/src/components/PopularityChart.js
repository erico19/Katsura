import React, { useState, useEffect } from "react";
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarController, BarElement, LinearScale, Title, CategoryScale, Tooltip } from 'chart.js';
import ServiceStatus from "./ServiceStatus.js";

ChartJS.register(BarController, BarElement, LinearScale, CategoryScale, Title, Tooltip);

const PopularityChart = ({ location }) => {
  const current = new Date();
  const [hdata, setHData] = useState({
    "message": null,
    "data": {},
    "sensor": null,
  });

  const [popularity, setPopularity] = useState({
    "count": 0,
    "time": `${current.getHours()}:${current.getMinutes()}`,
    "sensor": null,
    "time_to_display": null,
  });

  const apiURL = "https://katsura-backend.onrender.com";

  useEffect(() => {
    console.log("Fetching data...");
    fetch(`${apiURL}/day_average/${location}`)
      .then(res => res.json())
      .then(json => {
        console.log("Received historical data:", json);
        setHData(json);
      })
      .catch(error => console.error(error));
  }, [location]);

  useEffect(() => {
    console.log("Counting users...");
    fetch(`${apiURL}/service-level-api/${location}`)
      .then(res => res.json())
      .then(json => {
        console.log("Received popularity data:", json);
        setPopularity(json);
      })
      .catch(error => console.error(error));
  }, [location]);

  console.log(`${apiURL}/day_average/${location}`);
  console.log("hdata: ", hdata);
  console.log("Popularity: ", popularity);

  let displayBarChart;

  if (hdata.message == null) {
    displayBarChart = <div></div>;
  } else if (hdata.message !== 'SUCCESS') {
    displayBarChart = <div className="text-red-600">The Cafeteria is closed today!</div>;
  } else {
    const labels = hdata.data.map(function(label) {
      label = label.time;
      label = label.slice(0,5);
      label = convertTimeToString(label);
      label = label.split(' ');
      return label;
    });

    const bins = hdata.data.map(function(label) {
      label = label.time;
      label = label.slice(0,5);
      return label;
    });

    console.log("Labels: ", labels);
    console.log("bins: ", bins);
    
    const data = hdata.data.map(function(e) {
      return e.count;
    });

    var liveData = Array(labels.length).fill(0);
    var timeNow = popularity.time;
    var i = bins.indexOf(timeNow);
    console.log("i: ", i);

    timeNow = convertTimeToString(timeNow);
    timeNow = timeNow.split(" ")[0];
    console.log("TimeNow: ", timeNow);
    liveData[i] = popularity.count;
    // liveData[i] = 800;
    console.log("Live data: ", liveData);

    var hist_background_colors = Array(labels.length).fill("rgba(0, 0, 102,1");
    var live_background_colors = Array(labels.length).fill("rgba(0,176,240,1");
    
    if (liveData[i] > data[i]) {
      live_background_colors = Array(labels.length).fill("rgba(0,176,240,0.5");
    }

    hist_background_colors[i] = "rgba(208,206,206,1)";

    // Adjust bar width and spacing based on location
    let barPercentageValue = 0.2; // Reduce bar width
    let categoryPercentageValue = 0.5; // Reduce space between bars
    if (location === "main_cafeteria") {
      barPercentageValue = 0.15; // Further decrease bar width for main cafeteria
      categoryPercentageValue = 0.4; // Further reduce space between bars for main cafeteria
    }

    const chartData = {
      labels: labels,
      datasets: [
        {
          label: 'Live Data',
          data: liveData,
          barPercentage: barPercentageValue,
          categoryPercentage: 5,
          backgroundColor: live_background_colors,
          borderWidth: 5,
          borderRadius: 7,
        },
        {
          label: 'Historical Average',
          data: data,
          barPercentage: barPercentageValue,
          categoryPercentage: 5,
          backgroundColor: hist_background_colors,
          borderWidth: 4,
          borderRadius: 7,
        },
      ]
    };

    const config = {
      plugins: {
        legend: {
          position: 'top',
          align: 'center',
        }
      },
      scales: {
        x: {
          grid: { display: false },
          stacked: true,
          ticks: { color: 'black', font: { weight: 'bold', fontSize: 12 } }, // Adjust font size
          stepSize: 2
        },
        y: {
          grid: { display: false },
          ticks: { color: 'black', font: { weight: 'bold', fontSize: 12 } }, // Adjust font size
          beginAtZero: true,
          display: false,
          stepSize: 1
        }
      },
      responsive: true, // Enable responsiveness
      maintainAspectRatio: false, // Disable aspect ratio
      hover: {
        onHover: (event, chartElement) => {
          event.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
        }
      }
    };

    if (labels) {
      displayBarChart = (
        <Bar
          type='bar'
          data={chartData}
          options={config}
          height={300} // Adjust height as needed
          className="rounded-lg shadow-lg p-4 m-4" // Apply Tailwind CSS classes for styling
        />
      );
    } else {
      displayBarChart = <Bar />;
    }

    var service_status;
    if ((popularity.count != null) && (i != -1)) {
      service_status = <ServiceStatus count={liveData[i]} average_count={data[i]} apiURL={apiURL} location={location}/>;
    } else {
      service_status = "";
    }
  }

  const { t } = useI18next();
  const language = t('CURRENT_LOCALE');
  const time = new Date();
  var dateToDisplay = time.toLocaleDateString(language, { weekday:"long", year:"numeric", month:"long", day:"numeric"});

  return (
    <div>
      <div className="grid gap-4 p-0 bg-gray-100 bg-opacity-80 rounded-lg">
<h2 className="text-md text-gray-500 font-medium font-bold" style={{ color: 'black', width: '14%', textAlign: 'left', fontSize: '13px', whiteSpace: 'nowrap', marginTop: '8px', marginLeft: '30px', marginRight: '0' }}>
  
         {dateToDisplay}

        </h2>
        <div>
          {displayBarChart}          
        </div>
        {service_status}
      </div>
    </div>
  );
}

export default PopularityChart;

function convertTimeToString(time) {
  var arr = time.split(":");
  var hours = parseInt(arr[0]);
  var minutes = parseInt(arr[1]);

  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
