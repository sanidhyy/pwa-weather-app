import axios from "axios";

import type { WeatherData } from "./types";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

export const fetchWeather = async (query: string): Promise<WeatherData> => {
  const { data } = await axios.get<WeatherData>(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return data;
};
