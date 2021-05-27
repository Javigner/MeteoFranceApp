import { gql } from '@apollo/client';

export const GET_CITY_METEO = gql`
    query GetCityMeteo($path: String!) {
        getCityMeteo @rest(path: $path) {
            current
            daily
        }
    }
`;
