import React, { useState } from "react";
import "./Weather.css";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();

    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="UnitCnversion">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit} className="active">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="UnitCnversion">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius} className="active">
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
