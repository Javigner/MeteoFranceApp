import MeteoCard from "../components/MeteoCard";
import styled from "styled-components";
import WeatherForecast from "../models/weather";

function MeteoCards(props: { data: WeatherForecast.MeteoData[] }) {
  const Data = props.data;
  return (
    <Cards>
      {Data.map((data, index) => (
        <MeteoCard
          index={index}
          length={Data.length}
          key={data.name}
          temp={data.Wheater.current.temp}
          city={data.name}
          picture={data.picture}
          weather={data.Wheater.current.weather[0].main}
          data={data}
        />
      ))}
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
