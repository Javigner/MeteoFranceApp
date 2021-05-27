import React from 'react';
import styled from 'styled-components';

import { cities } from '../utility/const';
import MeteoCardByCity from '../components/MeteoCardByCity';

function MeteoCards() {
    return (
        <Cards>
            {cities.map((city) => {
                return <MeteoCardByCity {...city} key={city.cityName} />;
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
