import React from 'react';
import styled from 'styled-components';

import getNextDayDate from '../utility/get-next-day-date';
import MeteoIcon from './MeteoIcon';
import * as WeatherForecast from '../models/weather';

interface ForecastCardProps {
    dailyMeteoData: WeatherForecast.Daily;
    index: number;
}

function ForecastCard({ dailyMeteoData, index }: ForecastCardProps) {
    const [today, date, month] = getNextDayDate(index);
    const { temp, weather } = dailyMeteoData;
    const { min, max, day } = temp;
    const { main, description } = weather[0];

    return (
        <Box>
            <DateStyle>{`${today} ${date} ${month}`}</DateStyle>
            <Temp>{day}°</Temp>
            <Meteo>
                <MeteoIcon weather={main} />
                {description}
            </Meteo>
            <Min>min: {min}°</Min>
            <Max>max: {max}°</Max>
        </Box>
    );
}

const Box = styled.div`
    display: grid;
    grid-template-columns: 5fr 5fr 5fr 5fr;
    margin: 5px;
    border-radius: 20px;
    padding: 20px 20px;
    border: 1px solid #ccc;
    background-size: cover;
    background: linear-gradient(to right, #a2eafc, #6dd5fa, #2980b9);
`;

const CardText = styled.div`
    text-shadow: 1px 1px 0 rgb(0 0 0 / 35%), 1px 1px 5px rgb(0 0 0 / 50%);
    font-weight: 700;
    color: white;
    text-transform: capitalize;
    font-size: 22px;
`;

const DateStyle = styled(CardText)`
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
`;

const Temp = styled(CardText)`
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 4;
`;

const Meteo = styled(CardText)`
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
    font-size: 16px;
    margin: 0;
    line-height: 1.125;
    font-weight: 700;
    text-shadow: 1px 1px 0 rgb(0 0 0 / 35%), 1px 1px 5px rgb(0 0 0 / 50%);
    margin-top: 15px;
`;

const MinMax = styled(CardText)`
    font-size: 14px;
    margin: auto;
`;

const Min = styled(MinMax)`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 4;
`;

const Max = styled(MinMax)`
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 4;
    grid-row-end: 4;
`;

export default ForecastCard;
