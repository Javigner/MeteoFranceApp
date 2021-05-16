import styled from "styled-components";
import ForecastCard from "./ForecastCard";

function MeteoForecast(props) {
  return (
      <Wrapper>
        <CityPicture
          picture={props.data.picture}
        >
          <CityName>Météo de {props.data.name}</CityName>
        </CityPicture>
        {props.data.Wheater.daily.map((data, index) => (
          <ForecastCard key={index} index={index} data={data} />
        ))}
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
`
const CityPicture = styled.div`
  background-image: url(${props => props.picture});
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
`
export default MeteoForecast;
