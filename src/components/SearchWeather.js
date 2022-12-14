import React, { useEffect } from "react";
import DisplayWeather from "./DisplayWeather";
import "../styles/searchWeather.css";

//Function to fetch data using API

//Set state
export default function SearchWeather() {
  const [city, setCity] = React.useState("oslo");
  const [weatherData, setWeatherData] = React.useState({});
  const apiKey = "937feab78c001c55c9c7dfd7c14b0f7e";

  //Function to handle the changes in text field
  function handleChange(event) {
    setCity(event.target.value);
  }

  //Function to fetch data using API
  async function getWeatherData() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    ).then((response) => response.json());
    setWeatherData(response);
    console.log(weatherData);
  }
  //Hook to execute the API fetch on page load
  useEffect(() => {
    console.log("running");
    getWeatherData(); // eslint-disable-next-line
  }, []);
  return (
    <div className="searchWeather">
      {weatherData.main !== undefined ? (
        <div className="weatherdetails">
          <input
            type="search"
            placeholder="Enter City"
            onChange={handleChange}
          ></input>
          <button onClick={getWeatherData}>Get Weather</button>
          <DisplayWeather data={weatherData} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
