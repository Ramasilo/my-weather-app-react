import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "3fdc8cfbf2d6fa0116c9ae92d3df4f79";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Sat</div>{" "}
          <WeatherIcon code="01d" size={36} />{" "}
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">21°</span>
            <span className="WeatherForecast-temperature-min">14°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
