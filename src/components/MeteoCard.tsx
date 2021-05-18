import MeteoIcon from "./MeteoIcon";
import styled from "styled-components";
import { Link } from "react-router-dom"

interface Props {
  picture: string;
  weather: string;
  city: string;
  temp: number;
}

function MeteoCard(props: Props) {
  return (
    <Card
    picture={props.picture}
    >
    <Link to={`/${props.city}`}>
      <CardHeader>
        <City>{props.city}</City>
        <Country>France</Country>
        <MeteoCity>
          {props.temp}°
          <MeteoIcon weather={props.weather} />
        </MeteoCity>
      </CardHeader>
    </Link>
    </Card>
  );
}

const Card = styled.div<{ picture: string }>`
  width: 18%;
  background-image: url(${(props) => props.picture});
  border: ${(props) => props.theme.CardTheme.border};
  transition: 0.1s;
  background-size: cover;
  border-radius: 20px;
  margin: 14px;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: ${(props) => props.theme.CardTheme.boxShadow};
    cursor: zoom-in;
  }
  @media screen and (max-width: 1000px) {
    width: 46%;
  }

  @media screen and (max-width: 620px) {
    width: 90%;
    margin: 20px;
  }
`;
const CardHeader = styled.div`
  text-align: center;
  padding: 50px 10px;
  color: ${(props) => props.theme.CardTheme.color};
`;
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
