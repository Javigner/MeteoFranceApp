import styled from "styled-components";
import React from 'react'

function MeteoIcon (props: {weather: string}) {
  const weather = props.weather;
  const renderSwitch = (weather: string) => {
    switch (weather) {
      case "Clouds":
        return <i className="fas fa-cloud-sun"></i>;
      case "Rain":
        return <i className="fas fa-cloud-rain"></i>;
      case "Snow":
        return <i className="far fa-snowflake"></i>;
      default:
        return <i className="fas fa-sun"></i>;
    }
  };

  return <MeteoIconStyle>{renderSwitch(weather)}</MeteoIconStyle>;
}

const MeteoIconStyle = styled.div`
  margin-top: 15px;
  font-size: 30px;
`;

export default MeteoIcon;
