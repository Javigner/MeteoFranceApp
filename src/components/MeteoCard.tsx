import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import MeteoIcon from './MeteoIcon';

interface MeteoCardProps {
    picture: string;
    weather: string;
    city: string;
    temp: number;
}

function MeteoCard({ picture, weather, city, temp }: MeteoCardProps) {
    return (
        <Card picture={picture}>
            <Link to={`/${city}`}>
                <CardHeader>
                    <City>{city}</City>
                    <Country>France</Country>
                    <MeteoCity>
                        {temp}°
                        <MeteoIcon weather={weather} />
                    </MeteoCity>
                </CardHeader>
            </Link>
        </Card>
    );
}

interface CardTheme {
    border: string;
    boxShadow: string;
    color: string;
}

interface ThemeProps {
    CardTheme: CardTheme;
}

interface StyleProps {
    picture: string;
    theme: ThemeProps;
}

interface CardHeaderProps {
    theme: ThemeProps;
}

const Card = styled.div(
    ({ picture, theme }: StyleProps) => css`
        width: 18%;
        background-image: url(${picture});
        border: ${theme.CardTheme.border};
        transition: 0.1s;
        background-size: cover;
        border-radius: 20px;
        margin: 14px;

        &:hover {
            transform: scale(1.05);
            box-shadow: ${theme.CardTheme.boxShadow};
            cursor: zoom-in;
        }
        @media screen and (max-width: 1000px) {
            width: 46%;
        }

        @media screen and (max-width: 620px) {
            width: 90%;
            margin: 20px;
        }
    `
);

const CardHeader = styled.div(
    ({ theme }: CardHeaderProps) => css`
        text-align: center;
        padding: 50px 10px;
        color: ${theme.CardTheme.color};
    `
);

const City = styled.div`
    font-size: 26px;
    margin: 0;
    line-height: 1.125;
    font-weight: 700;
    text-shadow: 1px 1px 0 rgb(0 0 0 / 35%), 1px 1px 5px rgb(0 0 0 / 50%);
`;

const MeteoCity = styled(City)`
    margin-top: 15px;
`;

const Country = styled(City)`
    font-size: 16px;
`;

export default MeteoCard;
