import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './Button';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: #f6f6ff;

  h2 {
    padding: 2rem 0;
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

  const theme = {
    width: '200px',
    height: '45px',
    color: '#f3f3f3',
    backgroundColor: '#f44b12',
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <h2>How to Play</h2>
        <StyledStepsContainer>
          <ul>
            <li>Click the "Start" button to begin the game.</li>
            <li>
              An image of a dog will be displayed, along with a set of answer
              choices that describe the breed of the dog shown in the image.
            </li>
            <li>
              Your goal is to select the correct breed of the dog that is shown.
            </li>
            <li>
              Select your answer from the available choices, and then click on
              the "Submit" button.
            </li>
            <li>That's all! Let's see how well you know your dogs!</li>
          </ul>
        </StyledStepsContainer>
        <StyledButtonContainer>
          <Button onButtonClick={exitDirections}>Close</Button>
        </StyledButtonContainer>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default Directions;
