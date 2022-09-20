import React, { useState } from 'react';
import Navbar from './Navbar';
import DogImage from './DogImage';
import AnswerChoices from './AnswerChoices';

const GameScreen = () => {
  const [correctBreed, setCorrectBreed] = useState('');

  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="question">Which breed does this dog belong to?</div>
        <br />
        <br />
        <DogImage correctBreed={correctBreed} />
        <br />
        <br />
        <AnswerChoices onCorrectBreedFiltered={setCorrectBreed} />
        <br />
        <div>
          <button>Submit</button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default GameScreen;
