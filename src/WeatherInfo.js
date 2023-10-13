import React from "react";
import CurrentDate from "./CurrentDate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          <CurrentDate date={props.info.date} />
        </li>
        <li>{props.info.description}</li>
      </ul>
      <div className="row">
        <div className="col-6 mt-3">
          <div className="d-flex">
            <img src={props.info.iconUrl} alt={props.info.descripton} />
            <span className="temperature">
              {Math.round(props.info.temperature)}
            </span>
            <span className="unit">°c</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
