import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForcastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days[day];
  }

  return (
    <div>
      <div>{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={36} />
      <div>
        <span className="ForcastTemperatureMax">
          {Math.round(props.data.temperature.maximum)}°
        </span>
        <span className="ForcastTemperatureMin">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
