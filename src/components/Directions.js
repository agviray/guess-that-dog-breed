import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: #fcf4ec;
  border-radius: 15px;

  h2 {
    padding-top: 2rem;
    padding-bottom: 1rem;
    text-align: center;
  }
`;

const StyledStepsContainer = styled.div`
  ul {
    padding-bottom: 2rem;
  }

  li {
    padding-bottom: 1rem;

    &:first-child {
      padding-top: 1rem;
    }
  }
`;

const StyledButtonContainer = styled.div`
  display: inline-block;
  padding-bottom: 2rem;
`;

const Directions = ({ directionsStatus, onDirectionsStatusChange }) => {
  const exitDirections = () => {
    return directionsStatus ? onDirectionsStatusChange(false) : null;
  };

  return (
    <StyledContainer>
      <h2>How to Play</h2>
      <StyledStepsContainer>
        <ul>
          <li>How well do you know dog breeds?</li>
          <li>
            An image of a dog will be displayed, along with a set of answer
            choices listing different dog breeds.
          </li>
          <li>
            Select your answer and click "Submit" to see if you're correct.
          </li>
          <li>Click "Play" to begin the game!</li>
        </ul>
      </StyledStepsContainer>
      <StyledButtonContainer>
        <Button isButtonAvailable={true} onButtonClick={exitDirections}>
          Exit to Play
        </Button>
      </StyledButtonContainer>
    </StyledContainer>
  );
};

export default Directions;
