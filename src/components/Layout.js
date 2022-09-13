import React from 'react';
import styled from 'styled-components';
import TitleScreen from './TitleScreen';
import GameScreen from './GameScreen';
import Route from './Route';

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Layout = () => {
  return (
    <Wrapper>
      <Route path="/">
        <TitleScreen />
      </Route>
      <Route path="/game">
        <GameScreen />
      </Route>
    </Wrapper>
  );
};

export default Layout;
