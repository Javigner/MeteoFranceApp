import styled from 'styled-components';
import ForecastCard from './ForecastCard';
import * as WeatherForecast from '../models/weather';
import { useParams, Redirect } from 'react-router-dom';
import React from 'react';

interface Params {
    city: string;
}

function MeteoForecast(props: { data: WeatherForecast.MeteoData[] }) {
    const params = useParams<Params>();
    if (props.data[0] === undefined) {
        return <Redirect to="/"></Redirect>;
    }
    const data: any = props.data.find(
        (element) => element.name === params.city
    );
    return (
        <Wrapper>
            <CityPicture picture={data.picture}>
                <CityName>Météo de {data.name}</CityName>
            </CityPicture>
            {data.Wheater.daily.map(
                (DataDaily: WeatherForecast.Daily, index: number) => (
                    <ForecastCard key={index} index={index} data={DataDaily} />
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
const CityPicture = styled.div<{ picture: string }>`
    background-image: url(${(props) => props.picture});
    border: 1px solid #ccc;
    background-size: cover;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    border-radius: 20px;
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
`;
const CityName = styled.div`
    margin: auto;
    color: white;
    font-size: 40px;
    font-weight: 700;
    text-shadow: 1px 1px 0 rgb(0 0 0 / 35%), 1px 1px 5px rgb(0 0 0 / 50%);
`;
export default MeteoForecast;
