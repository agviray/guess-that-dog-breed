import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Nugget from '../assets/IMG_3520.JPG';

const DogImage = styled.img`
  max-width: 400px;
  max-height: 500px;
`;

const GameScreen = () => {
  return (
    <React.Fragment>
      <header>
        <h1>Game Screen</h1>
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
        <br />
        <div>
          <button>Submit</button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default GameScreen;
