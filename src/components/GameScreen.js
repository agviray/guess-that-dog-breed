import React from 'react';
import Navbar from './Navbar';
import DogImage from './DogImage';
import AnswerChoices from './AnswerChoices';
import Nugget from '../assets/IMG_3520.JPG';

const GameScreen = () => {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="question">Which breed does this dog belong to?</div>
        <br />
        <br />
        <div>
          <DogImage src={Nugget} />
        </div>
        <br />
        <br />
        <AnswerChoices />
        <br />
        <div>
          <button>Submit</button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default GameScreen;
