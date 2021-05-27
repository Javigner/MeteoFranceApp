import React from 'react';

import MeteoCard from './MeteoCard';
import useFetchMeteoData from '../hooks/useFetchMeteoData';

interface CityProps {
    cityName: string;
    lat: string;
    long: string;
    picture: string;
}

function MeteoCardByCity({ cityName, lat, long, picture }: CityProps) {
    const { data, error } = useFetchMeteoData(lat, long);

    if (error) console.log(error);

    if (!data) return null;

    const { temp, weather } = data.getCityMeteo.current;

    return (
        <MeteoCard
            key={cityName}
            temp={temp}
            city={cityName}
            picture={picture}
            weather={weather[0].main}
        />
    );
}

export default MeteoCardByCity;
