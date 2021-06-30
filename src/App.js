import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './style.css';

const API_KEY = '04794127ed8dd51b3f4b806399afef77';

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const fetchWeather = async e => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    console.log(response);
    setWeather(response.data);
  };

  return (
    <div className="App">
      <SearchWeather weather={weather} />
      <SearchCity setCity={setCity} fetchWeather={fetchWeather} />
    </div>
  );
}

export default App;

function SearchCity(props) {
  return (
    <div>
      <h4>React Weather App</h4>
      <br />
      <h4>Find Weather of the City</h4>
      <form onSubmit={props.fetchWeather}>
        <input
          type="text"
          placeholder="city"
          onChange={e => props.setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

function SearchWeather(props) {
  return (
    <div>
      <h4>React Weather App</h4>
      <br />

      <span>
        <h4>{`${Math.floor(props.weather?.main?.temp - 273)}°C`}</h4>
        <h6>{`| ${props.weather?.weather[0].description}`}</h6>
      </span>

      <h2>
        {props.weather?.name},{props.weather?.sys.country}
      </h2>

      <div>Wind value={props.weather?.wind.speed}</div>
      <div>Humidity value={props.weather?.main.humidity}</div>
      <div>Pressure value={props.weather?.main.pressure}</div>
    </div>
  );
}
