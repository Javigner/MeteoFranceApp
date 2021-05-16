import { useState, useEffect } from "react";
import { getDataForecast } from "../utility/get-data";

function useFetch(Cities) {
  const [Data, setData] = useState([]);

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
