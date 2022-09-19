import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Nugget from '../assets/IMG_3520.JPG';
import AnswerChoices from './AnswerChoices';

const DogImage = styled.img`
  max-width: 400px;
  max-height: 500px;
`;

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
          <DogImage src={Nugget} alt="dog image" />
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
