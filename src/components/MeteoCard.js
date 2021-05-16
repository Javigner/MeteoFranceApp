import MeteoIcon from "./MeteoIcon";
import styled from "styled-components";

function MeteoCard(props) {
  const DisplayMoreInfo = () => {
    props.HideMeteoCard(props.data);
  };
  return (
    <Card
      onClick={DisplayMoreInfo}
      picture={props.picture}
    >
      <CardHeader>
        <City>{props.city}</City>
        <Country>France</Country>
        <MeteoCity>
            {props.temp}°
            <MeteoIcon weather={props.weather} />
        </MeteoCity>
      </CardHeader>
    </Card>
  );
}

const Card = styled.div`
  width: 18.5%;
  background-image: url(${props => props.picture});
  border: 1px solid #ccc;
  margin-bottom: 20px;
  transition: 0.1s;
  background-size: cover;
  border-radius: 20px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.25);
    cursor: zoom-in;

  @media screen and (max-width: 1000px) {
    width: 46%;
  }

  @media screen and (max-width: 620px) {
    width: 90%;
  }
  }
`;
const CardHeader = styled.div`
  text-align: center;
  padding: 50px 10px;
  color: #fff;
`;
const City = styled.div`
  font-size: 26px;
  margin: 0;
  line-height: 1.125;
  font-weight: 700;
  text-shadow: 1px 1px 0 rgb(0 0 0 / 35%), 1px 1px 5px rgb(0 0 0 / 50%);
`
const MeteoCity = styled(City)`
  margin-top: 15px;
`
const Country = styled(City)`
  font-size: 16px;
`
export default MeteoCard;
