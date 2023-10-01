import React from "react";
import CurrantDate from "./CurrantDate";
import humi from "./humi.png";
import wind from "./wind.png";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="text-uppercase">
        {" "}
        <th>{props.data.name}</th>{" "}
      </h1>

      <div className="row">
        <div className="col-6 one">
          {props.data.temperature} <span className="celsius">°C</span>
        </div>
        <div className="col-6 two">
          <ul>
            <li className="second-number"></li>
            <li className="text-uppercase">
              <CurrantDate date={props.data.date} />
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul className="ps-0">
            <li>
              <img
                src={props.data.icon_url}
                alt={props.data.description}
                width="130px"
              />
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
