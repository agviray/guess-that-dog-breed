import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import TitleScreen from './TitleScreen';
import GameScreen from './GameScreen';
import Route from './Route';

const theme = {
  button: {
    bgColor: '#f44b12',
    textColor: '#f3f3f3',
    marginBtm: '2rem',
  },
};

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Route path="/">
          <TitleScreen />
        </Route>
        <Route path="/game">
          <GameScreen />
        </Route>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
