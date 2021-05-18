import { useState, useEffect } from "react";
import { getDataForecast } from "../utility/get-data";
import WeatherForecast from "../models/weather";

function useFetch(Cities: string[][], onError: Function) {
  const [Data, setData] = useState<WeatherForecast.MeteoData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Promise.all(
          Cities.map(async (City) => {
            return await getDataForecast(City);
          })
        );
        setData([...response]);
      } catch (error) {
        onError(error);
      }
    }
    fetchData();
  }, [Cities, onError]);
  return Data;
}

export default useFetch;
