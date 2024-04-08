import React, { useState, useEffect } from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import LiveIcon from "../images/live-icon.svg";

function ServiceStatus({ count, average_count, apiURL, location }) {
  const [status, setStatus] = useState();
  const { t } = useI18next();

  var message = null;
  var percent_diff = (count - average_count) / average_count;

  if (Math.abs(percent_diff) <= 0.05) {
    message = t("As busy as usual.");
  } else if (percent_diff > 0.05 && percent_diff <= 0.50) {
    message = t("Busier than usual.");
  } else if (percent_diff > 0.50) {
    message = t("Much busier than usual.");
  } else if (percent_diff < -0.05 && percent_diff >= -0.50) {
    message = t("Less busy than usual.");
  } else if (percent_diff < -0.50) {
    message = t("Much less busy than usual.");
  } else {
    message = "";
  }

  if (status !== 0) {
    return (
      <div  className="flex gap-0 items-center justify-start">
        

        <img className="inline h-7 w-20 pr-1" style={{ marginTop: '-10x',transform: 'translateY(-7px)' }}
          src={LiveIcon}
          alt="Live"
        />
        <span className="text-sm text-black-800 font-medium" style={{ textAlign: 'right',marginTop: '-16px'}}>{message}</span>

      </div>
    );
  } else {
    return <div></div>;
  }
}

export default ServiceStatus;
