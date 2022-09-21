import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './Button';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const theme = {
  width: '100px',
  height: '45px',
  color: '#f3f3f3',
  backgroundColor: '#2304fb',
};

const GameControls = () => {
  const [answerChecked, setAnswerChecked] = useState(false);

  const checkAnswer = () => {
    console.log('I am checking your answer!');
    setAnswerChecked(true);
  };

  const continueGame = () => {
    console.log('You WILL continue the game!!!');
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        {answerChecked ? (
          <Button onButtonClick={continueGame}>Continue</Button>
        ) : (
          <Button onButtonClick={checkAnswer}>Submit</Button>
        )}
      </StyledContainer>
    </ThemeProvider>
  );
};

export default GameControls;
