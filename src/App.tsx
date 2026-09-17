import { useState, type KeyboardEvent } from "react";

import { fetchWeather } from "./api/fetchWeather";
import type { WeatherData } from "./api/types";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const search = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter" || !query.trim()) {
      return;
    }

    try {
      const data = await fetchWeather(query.trim());
      setWeather(data);
      setError(null);
      setQuery("");
    } catch {
      setWeather(null);
      setError("Unable to fetch weather for that location.");
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search your Location:"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={search}
      />

      {error && <p className="error">{error}</p>}

      {weather?.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
