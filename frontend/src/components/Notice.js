import * as React from 'react';

import Exclamation from "../images/exclamation.svg"

const notice_sensors = ["AMPM18-KJ010", "AMPM18-KJ016", "AMPM18-KJ017"];

const Notice = ({ location }) => {
  var message = null;

  if (notice_sensors.includes(location)){
    message = "Cafeteria Selene is open for lunch from 11:00AM to 2:00PM"
  } else if (location == "AMPM18-KJ008") {
    message = "C Cluster Admnistration Office is open from 9:00AM TO 5:00PM"
  }

  console.log("Message: ", message)
  if (message != null) {
    return (
      <div className="flex gap-1 p-2 bg-yellow-200 rounded-lg items-center">
        <img
          className="inline h-4"
          src={Exclamation}
          alt="Exclamation"
        />
        <p className="text-xs text-gray-800 font-medium">{message}</p>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  } 
 };
 
 export default Notice;
