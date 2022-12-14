import React from "react";
import "../styles/searchWeather.css";

//Function to diplay Api data
export default function DisplayWeather(props) {
  return (
    <div className="searchweather">
      <h2 className="name">{props.data.name}</h2>
      <h2 class="temp">{Math.round(props.data.main.temp - 273.15)} &#x2103;</h2>
      <h2 class="feels">
        Feels like:{Math.round(props.data.main.feels_like - 273.15)} &#x2103;
      </h2>
      <h2 class="desc">{props.data.weather[0].description}</h2>
      <div className="details">
        <h2>Humidity:{props.data.main.humidity}%</h2>
        <h2>Wind:{props.data.wind.speed}m/sec</h2>
      </div>
    </div>
  );
}
