import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './Button';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: ${({ isAnswerCorrect }) =>
    isAnswerCorrect ? 'rgba(63, 207, 63, 0.8)' : 'rgba(226, 41, 41, 0.8)'};

  .message {
    padding-bottom: 2rem;
    color: #f3f3f3;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    text-align: center;
  }

  span {
    display: inline-flex;
    margin-left: auto;
    margin-right: auto;
  }
`;

const theme = {
  width: 'auto',
  height: '45px',
  backgroundColor: '#f3f3f3',
};

const passThemeStyles = (theme, answerStatus) => {
  const newTheme = {
    ...theme,
    color: `${answerStatus ? '#3fcf3f' : '#e22929'}`,
    border: `${answerStatus ? '2px solid #3fcf3f' : '2px solid #e22929'}`,
  };
  return newTheme;
};

const MessageModal = ({ submissionDetails, resetGameScreen }) => {
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  useEffect(() => {
    const postSubmission = { ...submissionDetails };
    if (postSubmission.isCorrect) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  }, [submissionDetails]);

  const renderMessage = (postSubmission) => {
    return postSubmission.isCorrect
      ? 'Congrats!'
      : `Sorry! Your answer is incorrect. The correct answer is: ${postSubmission.correctAnswer}`;
  };

  const continueGame = () => {
    resetGameScreen();
  };

  return (
    <ThemeProvider theme={() => passThemeStyles(theme, isAnswerCorrect)}>
      <StyledContainer isAnswerCorrect={isAnswerCorrect}>
        <div className="message">
          <h2>{renderMessage(submissionDetails)}</h2>
        </div>
        <span>
          <Button onButtonClick={continueGame} specialStyles={null}>
            Continue
          </Button>
        </span>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default MessageModal;
