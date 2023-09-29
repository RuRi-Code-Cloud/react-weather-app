import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import humi from "./humi.png";
import wind from "./wind.png";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      name: response.data.city,
      day: "Monday",
      time: "12:34",
      icon_url:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="🔍"
                className="btn btn-outline-secondary"
              />
            </div>
          </div>
        </form>
        <h1 className="text-uppercase">
          {" "}
          <th>{weatherData.name}</th>{" "}
        </h1>

        <div className="row">
          <div className="col-6 one">
            {weatherData.temperature} <span className="celsius">°C</span>
          </div>
          <div className="col-6 two">
            <ul>
              <li className="second-number">
                <th>{weatherData.time}</th>
              </li>
              <li className="text-uppercase">
                {" "}
                <th> {weatherData.day}</th>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <ul className="ps-0">
              <li>
                <img
                  src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-night.png"
                  alt="Cloudy"
                  width="130px"
                />
              </li>
              <li className="text-uppercase">
                {" "}
                <th>{weatherData.description}</th>{" "}
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>
                {" "}
                <img src={humi} alt="humidity" />{" "}
                <strong>
                  <span className="number">{weatherData.humidity}</span>%
                </strong>{" "}
              </li>
              <li>
                {" "}
                <img src={wind} alt="wind" />{" "}
                <strong>
                  {" "}
                  <span className="number">{weatherData.wind}</span> km/h
                </strong>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2b03bfeb040ctdb92faf2af53622202o";
    let city = "Oslo";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(showResponse);

    return "Loading..";
  }
}
