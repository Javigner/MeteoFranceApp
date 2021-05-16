import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import { Url, ApiKey, query } from "./const";

export const getDataForecast = async (Cities) => {
    const City = Cities[0];
    const Pic = Cities[3];
    const UriPath = `${Url}lat=${Cities[1]}&lon=${Cities[2]}&appid=${ApiKey}&lang=fr&units=metric`;
    const restLink = new RestLink({ uri: UriPath });
    const client = new ApolloClient({
      cache: new InMemoryCache(),
      link: restLink,
    });
    try {
      const response = await client.query({ query });
      return { ...response.data, name: City, picture: Pic };
    } catch (error) {
      console.log(error)
      return ('error')
    }
  };
