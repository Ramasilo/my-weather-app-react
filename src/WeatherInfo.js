import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";

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
            <WeatherIcon code={props.info.icon} />

            <UnitConversion celsius={props.info.temperature} />
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
