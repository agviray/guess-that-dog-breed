import React from 'react';
import Directions from './Directions';

const TitleScreen = () => {
  return (
    <div className="titleScreenContainer">
      <h1 className="title">Guess That Dog Breed!</h1>
      <span>Start</span>
      <Directions />
    </div>
  );
};

export default TitleScreen;
