import React, { useState } from "react";
import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
import react from "react";
function Search({onSeachChange}) {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchClick = () => {
    // Pass the entered city to the parent component
    onSeachChange(city);
  };


  return (


   
    <div className="container">
  
      <input
        type="text"
        id="input-name"
        placeholder="Type a city name"
        onChange={handleInputChange}
         value={city}
        
      />
      <button onClick={handleSearchClick}>Find weather</button>
    </div>
  );
}

export default Search;
