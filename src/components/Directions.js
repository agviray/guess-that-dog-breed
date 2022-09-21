import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: inherit;

  h2 {
    padding: 1rem 0;
  }
`;

const StyledDirections = styled.ul`
  padding-bottom: 2rem;
  li {
    padding-bottom: 1rem;

    &:first-child {
      padding-top: 1rem;
    }
  }
`;

const StyledButtonContainer = styled.div`
  padding-bottom: 1rem;
`;

const Directions = ({ directionsStatus, onDirectionsStatusChange }) => {
  const exitDirections = () => {
    return directionsStatus ? onDirectionsStatusChange(false) : null;
  };

  return (
    <StyledContainer>
      <h2>How to Play</h2>
      <StyledDirections>
        <li>Click the "Start" button to begin the game.</li>
        <li>
          An image of a dog will be displayed, along with a set of answer
          choices that describe the breed of the dog shown in the image.
        </li>
        <li>
          Your goal is to select the correct breed of the dog that is shown.
        </li>
        <li>
          Select your answer from the available choices, and then click on the
          "Submit" button.
        </li>
        <li>That's all! Let's see how well you know your dogs!</li>
      </StyledDirections>
      <StyledButtonContainer>
        <Button onButtonClick={exitDirections}>Close</Button>
      </StyledButtonContainer>
    </StyledContainer>
  );
};

export default Directions;
