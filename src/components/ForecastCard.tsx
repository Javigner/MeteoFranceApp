import getTodayDate from "../utility/get-today-date";
import MeteoIcon from "./MeteoIcon";
import styled from "styled-components";
import WeatherForecast from "../models/weather"

function ForecastCard(props: {data: WeatherForecast.Daily, index: number}) {
  const date = getTodayDate(props.index)
  return (
    <Box>
      <DateStyle>
        {" "}
        {date[0]} {date[1]} {date[2]}
      </DateStyle>
      <Temp>{props.data.temp.day}°</Temp>
      <Meteo>
        <MeteoIcon weather={props.data.weather[0].main} />
        {props.data.weather[0].description}
      </Meteo>
      <Min>min: {props.data.temp.min}°</Min>
      <Max>max: {props.data.temp.max}°</Max>
    </Box>
  );
}

const Box = styled.div`
  display: grid;
  grid-template-columns: 5fr 5fr 5fr 5fr;
  border-radius: 20px;
  padding: 20px 20px;
  border: 1px solid #ccc;
  background-size: cover;
  background: #2980b9; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #a2eafc,
    #6dd5fa,
    #2980b9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #a2eafc,
    #6dd5fa,
    #2980b9
  );
`
const CardText = styled.div`
  text-shadow: 1px 1px 0 rgb(0 0 0 / 35%), 1px 1px 5px rgb(0 0 0 / 50%);
  font-weight: 700;
  color: white;
  text-transform: capitalize;
  font-size: 22px;
`
const DateStyle = styled(CardText)`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
`
const Temp = styled(CardText)`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 4;
`
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
`
const MinMax = styled(CardText)`
  font-size: 14px;
  margin: auto;
`
const Min = styled(MinMax)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 4;
`
const Max = styled(MinMax)`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 4;
`
export default ForecastCard;
