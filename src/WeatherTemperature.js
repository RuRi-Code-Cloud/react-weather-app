import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function changeToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function changeToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="degrees">{props.celsius}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" on onClick={changeToFahrenheit}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="degrees">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" on onClick={changeToCelsius}>
            °C{" "}
          </a>
          |F
        </span>
      </div>
    );
  }
}
