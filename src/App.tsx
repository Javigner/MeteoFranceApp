import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import styled from 'styled-components';

import { url } from './utility/const';
import { theme, GlobalStyle } from './theme';
import Wave from './components/Wave';
import Header from './components/Header';
import MeteoCards from './pages/MeteoCards';
import ForeCastPages from './pages/ForecastPages';

function App() {
    const restLink = new RestLink({ uri: url });
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: restLink,
    });

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ApolloProvider client={client}>
                <Header />
                <Wave />
                <Container>
                    <Heading>
                        <Switch>
                            <Route path="/" exact>
                                <MeteoCards />
                            </Route>
                            <Route path="/:city" exact>
                                <ForeCastPages />
                            </Route>
                        </Switch>
                    </Heading>
                </Container>
            </ApolloProvider>
        </ThemeProvider>
    );
}

const Container = styled.div`
    width: 95%;
    margin: auto auto;

    @media screen and (max-width: 620px) {
        width: 100%;
    }
`;

const Heading = styled.div`
    text-align: center;
    font-size: 30px;
`;

export default App;
