import React, { Component, useState ,useEffect} from "react";
import Search from "./components/Search";
import WeatherItem from "./components/WeatherItem";
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import "./App.css";



const apiKey = '3168c5357f59b9f566db187a686c7ecf';


const App = () => {
  const [weatherData, setWeatherData] = useState(fakeWeatherData);

  // Function to fetch weather data for a specific city
  const fetchWeatherData = async (city) => {
    try {
      // Make an API request to get weather data for the specified city
      const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${apiKey}`);
      const data = await response.json();
      
      // Set the weather data in state
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    // Fetch initial weather data when the component mounts
    fetchWeatherData('london'); 
  }, []);

  return (
    <div className="app">
      <Search onSeachChange={fetchWeatherData}/> 
      <WeatherItem WeatherData={weatherData.list} data={weatherData} />

    </div>
  );
};

export default App;