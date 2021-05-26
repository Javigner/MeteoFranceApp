import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import MeteoForecast from '../components/MeteoForecast';
import * as WeatherForecast from '../models/weather';

interface ForeCastPages {
    meteoData: WeatherForecast.MeteoData[];
}

function ForeCastPages({ meteoData }: ForeCastPages) {
    return (
        <>
            <ButtonBox>
                <Link to="/">
                    <ReturnArrow className="fas fa-arrow-left"></ReturnArrow>
                </Link>
            </ButtonBox>
            <MeteoForecast meteoData={meteoData} />
        </>
    );
}

const ButtonBox = styled.div`
    text-align: left;
    margin: 20px;
`;

const ReturnArrow = styled.i`
    &:hover {
        cursor: pointer;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
`;

export default ForeCastPages;
