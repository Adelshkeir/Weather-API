import React, { useState } from "react";
import clear from "../img/weather-icons/clear.svg";
import "./Search.css";

function Search(props) {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleFindWeather = () => {
    props.handleInput(input);
  };

  return (
    <div className="container">
      {input}
      <input
        type="text"
        id="input-name"
        placeholder="Type a city name"
        onChange={handleInputChange}
      />
      <button onClick={handleFindWeather}>Find weather</button>
    </div>
  );
}

export default Search;
