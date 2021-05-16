import MeteoCard from "./components/MeteoCard";
import Wave from "./components/Wave";
import Header from "./components/Header";
import MeteoForecast from "./components/MeteoForecast";
import React, { useState, Fragment } from "react";
import styled from "styled-components";
import useFetch from "./hooks/useFetch"
import { Cities } from "./utility/const";

function App() {
  const [CityData, setCityData] = useState();
  const [HideMeteo, setHide] = useState(false);
  const HideMeteoCard = (CityData) => {
    setHide(true);
    setCityData(CityData);
  };
  const ShowMeteoCard = () => {
    setHide(false);
  };

  const Data = useFetch(Cities)
  return (
    <Fragment>
      <Header />
      <Wave />
      <Container>
        <Heading>
          {HideMeteo === false ? (
            <Cards>
              {Data.map((data) => (
                <MeteoCard
                  key={data.name}
                  temp={data.Wheater.current.temp}
                  city={data.name}
                  picture={data.picture}
                  weather={data.Wheater.current.weather[0].main}
                  data={data}
                  HideMeteoCard={HideMeteoCard}
                />
              ))}
            </Cards>
          ) : (
            <Fragment>
              <ButtonBox>
                <ReturnArrow
                  className="fas fa-arrow-left"
                  onClick={ShowMeteoCard}
                ></ReturnArrow>
              </ButtonBox>
              <MeteoForecast data={CityData} />
            </Fragment>
          )}
        </Heading>
      </Container>
    </Fragment>
  );
}

const Container = styled.div`
  width: 95%;
  margin: 10px auto;
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`
const Heading = styled.div`
  text-align: center;
  font-size: 30px;
  margin-bottom: 50px;
`
const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-flow: wrap;
`
const ButtonBox = styled.div`
  text-align: left;
  margin: 20px;
`
const ReturnArrow = styled.i`
  &:hover{
    cursor: pointer;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`
export default App;
