import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

import { url, apiKey, query } from './const';

interface Cities {
    cityName: string;
    lat: string;
    long: string;
    picture: string;
}

export const getDataForecast = async ({
    cityName,
    lat,
    long,
    picture,
}: Cities) => {
    const uriPath = `${url}lat=${lat}&lon=${long}&appid=${apiKey}&lang=fr&units=metric`;
    const restLink = new RestLink({ uri: uriPath });
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: restLink,
    });
    const response = await client.query({ query });
    //{ data, loading, error }
    return { ...response.data, name: cityName, picture: picture };
};
