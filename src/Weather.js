import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import { InfinitySpin } from "react-loader-spinner";
import WeatherForcast from "./WeatherForcast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      name: response.data.city,
      date: new Date(),
      icon: response.data.condition.icon,
    });
  }
  function search() {
    const apiKey = "2b03bfeb040ctdb92faf2af53622202o";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(showResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
        <WeatherForcast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <div className="loader">
        <InfinitySpin height="100%" width="100%" color="black" />
      </div>
    );
  }
}
