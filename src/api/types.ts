export type WeatherData = {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
  };
  weather: Array<{
    icon: string;
    description: string;
  }>;
};
