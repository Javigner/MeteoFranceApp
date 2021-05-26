import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
//import { ApolloProvider } from 'react-apollo';

import theme from './theme';
import Wave from './components/Wave';
import Header from './components/Header';
import styled from 'styled-components';
import useFetch from './hooks/useFetch';
import { cities } from './utility/const';
import MeteoCards from './pages/MeteoCards';
import ForeCastPages from './pages/ForecastPages';

function App() {
    const errorDetected = (error: Error) => {
        console.log(error);
    };
    const meteoData = useFetch(cities, errorDetected);
    console.log(JSON.stringify(meteoData[0]));
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <Wave />
            <Container>
                <Heading>
                    <Switch>
                        <Route path="/" exact>
                            <MeteoCards meteoData={meteoData} />
                        </Route>
                        <Route path="/:city" exact>
                            <ForeCastPages meteoData={meteoData} />
                        </Route>
                    </Switch>
                </Heading>
            </Container>
        </ThemeProvider>
    );
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }
`;

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
