import React from 'react';
import styled, { css } from 'styled-components';

import ForecastCard from './ForecastCard';
import * as WeatherForecast from '../models/weather';
import useFetchMeteoData from '../hooks/useFetchMeteoData';

interface CityProps {
    cityName: string;
    lat: string;
    long: string;
    picture: string;
}

function MeteoForecast({ cityName, lat, long, picture }: CityProps) {
    const { data, error } = useFetchMeteoData(lat, long);

    if (error) console.log(error);

    if (!data) return null;

    return (
        <Wrapper>
            <CityPicture picture={picture}>
                <CityName>Météo de {cityName}</CityName>
            </CityPicture>
            {data.getCityMeteo.daily.map(
                (dailyMeteoData: WeatherForecast.Daily, index: number) => (
                    <ForecastCard
                        key={index}
                        index={index}
                        dailyMeteoData={dailyMeteoData}
                    />
                )
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 200px;
    grid-column-gap: 10px;
    grid-row-gap: 10px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 620px) {
        grid-template-columns: 1fr;
    }
`;

interface CityPictureProps {
    picture: string;
}

const CityPicture = styled.div(
    ({ picture }: CityPictureProps) => css`
        background-image: url(${picture});
        border: 1px solid #ccc;
        margin: 5px;
        background-size: cover;
        border-radius: 20px;

        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;

        text-align: center;
        display: flex;

        @media screen and (max-width: 1000px) {
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 1;
            grid-row-end: 3;
        }

        @media screen and (max-width: 620px) {
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 1;
            grid-row-end: 2;
        }
    `
);

const CityName = styled.div`
    margin: auto;
    color: white;
    font-size: 40px;
    font-weight: 700;
    text-shadow: 1px 1px 0 rgb(0 0 0 / 35%), 1px 1px 5px rgb(0 0 0 / 50%);
`;

export default MeteoForecast;
