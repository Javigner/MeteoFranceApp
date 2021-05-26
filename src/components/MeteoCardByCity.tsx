import React from 'react';

import MeteoCard from './MeteoCard';
import * as WeatherForecast from '../models/weather';

interface MeteoCardByCityProps {
    name: string;
    Wheater: WeatherForecast.Wheater;
    picture: string;
}

function MeteoCardByCity({ name, Wheater, picture }: MeteoCardByCityProps) {
    return (
        <MeteoCard
            key={name}
            temp={Wheater.current.temp}
            city={name}
            picture={picture}
            weather={Wheater.current.weather[0].main}
        />
    );
}

export default MeteoCardByCity;
