import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcast.css";
import axios from "axios";

export default function WeatherForcast(props) {
  function showResponse(response) {
    console.log(response.data);
  }

  let lon = props.coordinates.longitude;
  let lat = props.coordinates.latitude;
  let apiKey = "2b03bfeb040ctdb92faf2af53622202o";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&unit=metric`;

  axios.get(apiUrl).then(showResponse);
  return (
    <div className="WeatherForcast">
      <div className="row">
        <div className="col">
          <div>Mon</div>
          <WeatherIcon code="clear-sky-day" size={36} />
          <div>
            <span className="ForcastTemperatureMax">13°</span>
            <span className="ForcastTemperatureMin">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
