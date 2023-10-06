import React, { useState, useEffect } from "react";
import "./WeatherForcast.css";
import axios from "axios";
import ForcastDay from "./ForcastDay";

export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forcast, setForcast] = useState(null);
  function showResponse(response) {
    setForcast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let apiKey = "2b03bfeb040ctdb92faf2af53622202o";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&unit=metric`;

    axios.get(apiUrl).then(showResponse);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    console.log(forcast);
    return (
      <div className="WeatherForcast">
        <div className="row">
          <div className="col">
            <ForcastDay data={forcast[1]} />
          </div>
          <div className="col">
            <ForcastDay data={forcast[2]} />
          </div>
          <div className="col">
            <ForcastDay data={forcast[3]} />
          </div>
          <div className="col">
            <ForcastDay data={forcast[4]} />
          </div>
          <div className="col">
            <ForcastDay data={forcast[5]} />
          </div>
          <div className="col">
            <ForcastDay data={forcast[6]} />
          </div>
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
