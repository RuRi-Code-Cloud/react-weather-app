import React from "react";
import CurrantDate from "./CurrantDate";
import humi from "./humi.png";
import wind from "./wind.png";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="text-uppercase">
        {" "}
        <th>{props.data.name}</th>{" "}
      </h1>

      <div className="row">
        <div className="col-6 ">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6 two">
          <div className="text-uppercase">
            <CurrantDate date={props.data.date} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul className="ps-0">
            <li className="icon">
              <WeatherIcon code={props.data.icon} size={72} />
            </li>
            <li className="text-uppercase"> {props.data.description} </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>
              {" "}
              <img src={humi} alt="humidity" />{" "}
              <strong>
                <span className="number">{props.data.humidity}</span>%
              </strong>{" "}
            </li>
            <li>
              {" "}
              <img src={wind} alt="wind" />{" "}
              <strong>
                {" "}
                <span className="number">{props.data.wind}</span> km/h
              </strong>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
