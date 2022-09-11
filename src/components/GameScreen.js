import React from 'react';
import Nugget from '../assets/IMG_3520.JPG';
import styled from 'styled-components';

const DogImage = styled.img`
  max-width: 400px;
  max-height: 500px;
`;

const GameScreen = () => {
  return (
    <React.Fragment>
      <header>
        <h1>Game Screen</h1>
        {/* Add access to game settings/options here! */}
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
        <div>
          <label htmlFor="answerOne">
            <input type="radio" id="answerOne" name="answer" />
            Answer Choice One
          </label>
          <br />
          <label htmlFor="answerTwo">
            <input type="radio" id="answerTwo" name="answer" />
            Answer Choice Two
          </label>
          <br />
          <label htmlFor="answerThree">
            <input type="radio" id="answerThree" name="answer" />
            Answer Choice Three
          </label>
        </div>
      </main>
    </React.Fragment>
  );
};

export default GameScreen;
