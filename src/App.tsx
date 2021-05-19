import Wave from './components/Wave';
import Header from './components/Header';
import { Fragment } from 'react';
import styled from 'styled-components';
import useFetch from './hooks/useFetch';
import { Cities } from './utility/const';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './theme';
import { Route, Switch } from 'react-router-dom';
import MeteoCards from './pages/MeteoCards';
import ForeCastPages from './pages/ForecastPages';
import React from 'react';

function App() {
    const errorDetected = (error: Error) => {
        console.log(error);
    };
    const Data = useFetch(Cities, errorDetected);
    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <Header />
                <Wave />
                <Container>
                    <GlobalStyle />
                    <Heading>
                        <Switch>
                            <Route path="/" exact>
                                <MeteoCards data={Data} />
                            </Route>
                            <Route path="/:city" exact>
                                <ForeCastPages data={Data} />
                            </Route>
                        </Switch>
                    </Heading>
                </Container>
            </ThemeProvider>
        </Fragment>
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
