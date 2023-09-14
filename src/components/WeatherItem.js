import React from "react";
import "./WeatherItem.css";
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

const WeatherItem=({data})=>{ 
  
  return (
    <div id="container_comp">
      <div className="weather_information">
        <div id="image_info">
          <img src={partlycloudy} alt="weather status " id="weather_status" />
          <p id="text_status">{data.list[0].weather[0].description} </p>
        </div>
        <p id="temp_txt">
          <strong>Temperature</strong> <span id="temp_from">{data.list[1].main.temp_min}</span> to{" "}
          <span id="temp_to">{data.list[0].main.temp_max}</span>
        </p>
        <p id="humidity_txt">
          <strong> Humidity</strong>
          <span id="humidity">{data.list[0].main.humidity}%</span>
          <span id="pressure_txt">
            <strong>Pressure</strong>
          </span>
          <span id="pressure">{data.list[0].main.pressure}</span>
        </p>
      </div>
      <div className="temp_hours">
        <div className="time time3">
          <p>3:00</p>
          <img src={partlycloudy} alt="Weather status " />
          <p>{data.list[1].main.temp}°C</p>
        </div>
        <div className="time time6">
          <p>6:00</p>
          <img src={partlycloudy} alt="Weather status" />
          <p>{data.list[2].main.temp}°C</p>
        </div>
        <div className="time time9">
          <p>9:00</p>
          <img src={clear} alt="Weather status" />
          <p>{data.list[3].main.temp}°C</p>
        </div>
        <div className="time time12">
          <p>12:00</p>
          <img src={clear} alt="Weather status" />
          <p>{data.list[4].main.temp}°C</p>
        </div>
        <div className="time time15">
          <p>15:00</p>
          <img src={clear} alt="Weather status" />
          <p>{data.list[5].main.temp}°C</p>
        </div>
        <div className="time time18">
          <p>18:00</p>
          <img src={clear} alt="Weather status" />
          <p>{data.list[6].main.temp}°C</p>
        </div>
        <div className="time time21">
          <p>21:00</p>
          <img src={partlycloudy} alt="Weather status" />
          <p>{data.list[7].main.temp}°C</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherItem;
