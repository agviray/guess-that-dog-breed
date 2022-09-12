import React from 'react';
import TitleScreen from './TitleScreen';
import GameScreen from './GameScreen';
import Route from './Route';

const Layout = () => {
  return (
    <div className="AppWrapper">
      <Route path="/">
        <TitleScreen />
      </Route>
      <Route path="/game">
        <GameScreen />
      </Route>
    </div>
  );
};

export default Layout;
