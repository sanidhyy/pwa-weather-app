import axios from "axios";

import type { WeatherData } from "./types";

export const fetchWeather = async (query: string): Promise<WeatherData> => {
  const { data } = await axios.get<WeatherData>("/api/weather", {
    params: {
      q: query,
    },
  });

  return data;
};
