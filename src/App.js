import React from "react";
import Search from "./components/Search";
import WeatherItem from "./components/WeatherItem";
import SayHi, { SayHello } from "./components/WeatherItem";
import Data from './fakeWeatherData.json';
import "./App.css";
// const DataJson= Data.map()
const App = (props) => {
  
  

  return (
    <div className="app">
      <Search />
      <WeatherItem data={Data}/>

    
    
    
    </div>
  );
};

export default App;
