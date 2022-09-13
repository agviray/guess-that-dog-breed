import React from 'react';
import StartButton from './StartButton';
import Directions from './Directions';

const TitleScreen = () => {
  return (
    <div className="titleScreenContainer">
      <h1 className="title">Guess That Dog Breed!</h1>
      <StartButton />
      <Directions />
    </div>
  );
};

export default TitleScreen;
