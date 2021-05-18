import { useState, useEffect } from "react";
import { getDataForecast } from "../utility/get-data";
import WeatherForecast from "../models/weather"

function useFetch(Cities: string[][]) {
  const [Data, setData] = useState<WeatherForecast.MeteoData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await Promise.all(
        Cities.map(async (City) => {
          return await getDataForecast(City);
        })
      );
      setData([...response]);
    }
    fetchData();
  }, [Cities]);
  return Data;
}

export default useFetch;
