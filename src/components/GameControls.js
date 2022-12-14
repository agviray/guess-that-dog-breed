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
  width: 'auto',
  height: '45px',
  color: '#f3f3f3',
  backgroundColor: '#2304fb',
};

const disabledStyles = {
  color: '#cacaca',
  backgroundColor: '#efefef',
};

const GameControls = ({
  selectedAnswer,
  identifiedAnswer,
  onSubmissionDetailsChange,
}) => {
  const [isSubmitAvailable, setIsSubmitAvailable] = useState(false);

  useEffect(() => {
    const selected = { ...selectedAnswer };

    if (Object.keys(selected).length === 0) {
      return;
    } else {
      return setIsSubmitAvailable(true);
    }
  }, [selectedAnswer]);

  const checkAnswer = (userAnswer, identifiedAnswer) => {
    const correctAnswer = identifiedAnswer;
    const chosenAnswer = { ...userAnswer };
    const submissionDetails = {
      isCorrect: correctAnswer === chosenAnswer.value,
      correctAnswer: correctAnswer,
    };

    return onSubmissionDetailsChange({ ...submissionDetails });
  };

  const theme = {
    width: '150px',
    height: '45px',
    color: '#f3f3f3',
    backgroundColor: '#7e5bad',

    hoverTheme: {
      backgroundColor: '#c59afc',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <Button
          isButtonAvailable={isSubmitAvailable}
          onButtonClick={() =>
            isSubmitAvailable
              ? checkAnswer(selectedAnswer, identifiedAnswer)
              : null
          }
          specialStyles={isSubmitAvailable ? null : disabledStyles}
        >
          Submit
        </Button>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default GameControls;
