import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultcity="Cape Town" />
        <footer>
          This project was coded by Precious Ramasilo and is{" "}
          <a
            href="https://github.com/Ramasilo/my-weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and
          <a
            href="https://lucky-lokum-f2479b.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
