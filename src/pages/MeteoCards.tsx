import MeteoCard from '../components/MeteoCard';
import styled from 'styled-components';
import * as WeatherForecast from '../models/weather';
import React from 'react';

function MeteoCards(props: { data: WeatherForecast.MeteoData[] }) {
    return (
        <Cards>
            {props.data.map((data) => (
                <MeteoCard
                    key={data.name}
                    temp={data.Wheater.current.temp}
                    city={data.name}
                    picture={data.picture}
                    weather={data.Wheater.current.weather[0].main}
                />
            ))}
        </Cards>
    );
}

const Cards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-flow: wrap;
`;

export default MeteoCards;
