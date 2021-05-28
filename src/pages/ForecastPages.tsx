import React from 'react';
import styled from 'styled-components';
import { useParams, Redirect, Link } from 'react-router-dom';

import { cities } from '../utility/const';
import MeteoForecast from '../components/MeteoForecast';

interface Params {
    city: string;
}

function ForeCastPages() {
    const params = useParams<Params>();
    const city = cities.find((element) => {
        return element.cityName === params.city;
    });

    if (!city) return <Redirect to="/"></Redirect>;

    return (
        <>
            <ButtonBox>
                <Link to="/">
                    <ReturnArrow className="fas fa-arrow-left"></ReturnArrow>
                </Link>
            </ButtonBox>
            <MeteoForecast {...city} />
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
