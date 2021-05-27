import { useQuery } from '@apollo/client';

import { GET_CITY_METEO } from '../graphql/Query';

function useFetchMeteoData(lat: string, long: string) {
    const { data, error } = useQuery(GET_CITY_METEO, {
        variables: {
            path: `lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}&lang=fr&units=metric`,
        },
        fetchPolicy: 'no-cache',
    });

    return { data, error };
}

export default useFetchMeteoData;
