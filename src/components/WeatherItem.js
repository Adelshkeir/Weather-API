import React from "react";
import "./Weatheritem.css";
import storm from "../img/weather-icons/storm.svg";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import unknown from "../img/weather-icons/unknown.svg";

const WeatherItem = ({ weatherData }) => {
  const getWeatherLogo = (id) => {
    switch (true) {
      case id < 300:
        return storm;
      case id >= 300 && id <= 499:
        return drizzle;
      case id >= 500 && id <= 599:
        return rain;
      case id >= 600 && id <= 699:
        return snow;
      case id >= 700 && id <= 799:
        return fog;
      case id === 800:
        return clear;
      case id === 801:
        return partlycloudy;
      case id >= 801 && id <= 805:
        return mostlycloudy;
      default:
        return unknown;
    }
  };

  const formatWeatherTime = (time) => {
    let formatedTime = time.split(" ")[1].split(":");

    return `${formatedTime[0]}:${formatedTime[1]}`;
  };

  if (!weatherData) {
    return <h2>Incorrect City Name !!!</h2>;
  }

  const currentWeather = weatherData[0];

  return (
    <div id="container_comp">
      <div className="weather_information">
        <div id="image_info">
          <img
            src={getWeatherLogo(currentWeather.weather[0]?.id)}
            alt="weather status"
            id="weather_status"
          />
          <p id="text_status">{currentWeather.weather[0]?.description}</p>
        </div>

        <p id="temp_txt">
          <strong>Temperature </strong>
          <span id="temp_from">{currentWeather.main?.temp_min}°C</span> to{" "}
          <span id="temp_to">{currentWeather.main?.temp_max}°C</span>
        </p>
        <p id="humidity_txt">
          <strong> Humidity</strong>
          <span id="humidity">{currentWeather.main?.humidity}%</span>
          <span id="pressure_txt">
            <strong>Pressure</strong>
          </span>
          <span id="pressure">{currentWeather.main?.pressure}</span>
        </p>
      </div>
      <div className="temp_hours">
        {weatherData.slice(0, 7).map((weather) => (
          <div className="time time3" key={weather.dt}>
            <p>{formatWeatherTime(weather.dt_txt)}</p>
            <img
              src={getWeatherLogo(weather.weather[0]?.id)}
              alt="Weather status"
            />
            <p>{weather.main?.temp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherItem;
