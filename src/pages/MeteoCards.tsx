import React from 'react';
import styled from 'styled-components';

import * as WeatherForecast from '../models/weather';
import MeteoCardByCity from '../components/MeteoCardByCity';

interface MeteoCardsProps {
    meteoData: WeatherForecast.MeteoData[];
}

function MeteoCards({ meteoData }: MeteoCardsProps) {
    return (
        <Cards>
            {meteoData.map((meteoDataByCity) => {
                return MeteoCardByCity(meteoDataByCity);
            })}
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
