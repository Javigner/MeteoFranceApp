import { gql } from '@apollo/client';

export const GET_CITY_METEO = gql`
    query getCityMeteo(lat: String!, lon: String!, appid: String!) {
        getCityMeteo(lat: $lat, lon: $lon, appid: $appid) {
            current
            daily
        }
    }
`;
