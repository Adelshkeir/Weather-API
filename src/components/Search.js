import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div className="container">
        {this.state.input}
        <input
          type="text"
          id="input-name"
          placeholder="Enter the Location"
        />
        <button
          onClick={event => {
            this.props.handleInput(this.state.input);
          }}

        >
          Find weather
        </button>
      </div>
    );
  }
}
export default Search;
