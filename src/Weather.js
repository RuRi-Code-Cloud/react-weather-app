import React from "react";
import "./Weather.css";
import humi from "./humi.png";
import prec from "./prec.png";
import wind from "./wind.png";

export default function Weather() {
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
      <h1>
        {" "}
        <th>Dublin</th>{" "}
      </h1>

      <div className="row">
        <div className="col-6 one">
          12 <span className="celsius">°C</span>
        </div>
        <div className="col-6 two">
          <ul>
            <li className="second-number">
              <th>12:34</th>
            </li>
            <li>
              {" "}
              <th> MONDAY</th>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul className="ps-0">
            <li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Cloudy"
                width="130px"
              />
            </li>
            <li>
              {" "}
              <th>CLOUDY</th>{" "}
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>
              {" "}
              <img src={prec} alt="precipitation" />{" "}
              <strong>
                <span className="number">15</span>%
              </strong>{" "}
            </li>
            <li>
              {" "}
              <img src={humi} alt="humidity" />{" "}
              <strong>
                <span className="number">72</span>%
              </strong>{" "}
            </li>
            <li>
              {" "}
              <img src={wind} alt="wind" />{" "}
              <strong>
                {" "}
                <span className="number">13</span> km/h
              </strong>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
