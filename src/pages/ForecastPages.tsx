import MeteoForecast from '../components/MeteoForecast';
import styled from 'styled-components';
import WeatherForecast from '../models/weather';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function ForeCastPages(props: { data: WeatherForecast.MeteoData[] }) {
    return (
        <Fragment>
            <ButtonBox>
                <Link to="/">
                    <ReturnArrow className="fas fa-arrow-left"></ReturnArrow>
                </Link>
            </ButtonBox>
            <MeteoForecast data={props.data} />
        </Fragment>
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
