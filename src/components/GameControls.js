import React, { useState, useEffect } from 'react';
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

const disabledStyles = {
  color: '#cacaca',
  backgroundColor: '#efefef',
};

const GameControls = ({ selectedAnswer }) => {
  const [isSubmitAvailable, setIsSubmitAvailable] = useState(false);
  const [answerChecked, setAnswerChecked] = useState(false);

  useEffect(() => {
    const selected = { ...selectedAnswer };

    if (Object.keys(selected).length === 0) {
      return;
    } else {
      return setIsSubmitAvailable(true);
    }
  }, [selectedAnswer]);

  const checkAnswer = (answer) => {
    const selectedAnswer = { ...answer };
    console.log('I am checking your answer!');
    console.log(`Your answer is ${selectedAnswer.value}`);
    console.log(`True or false? Your answer is: ${selectedAnswer.isCorrect}`);
    // setAnswerChecked(true);
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
          <Button
            onButtonClick={() =>
              isSubmitAvailable ? checkAnswer(selectedAnswer) : null
            }
            disabledStyles={isSubmitAvailable ? null : disabledStyles}
          >
            Submit
          </Button>
        )}
      </StyledContainer>
    </ThemeProvider>
  );
};

export default GameControls;
