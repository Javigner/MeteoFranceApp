import { useState, useEffect } from 'react';
import { getDataForecast } from '../utility/get-data';
import * as WeatherForecast from '../models/weather';

interface Cities {
    cityName: string;
    lat: string;
    long: string;
    picture: string;
}

function useFetch(cities: Cities[], onError: (error: Error) => void) {
    const [dataMeteo, setData] = useState<WeatherForecast.MeteoData[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await Promise.all(
                    cities.map(async (city) => {
                        return getDataForecast(city);
                    })
                );
                setData([...response]);
            } catch (error) {
                onError(error);
            }
        }
        fetchData();
    }, [cities, onError]);
    return dataMeteo;
}

export default useFetch;
