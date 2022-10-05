import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
    isAnswerCorrect ? 'rgba(127, 246, 127, 0.8)' : 'rgba(255, 52, 52, 0.8)'};

  .message {
    font-weight: 700;
    text-align: center;
  }
`;

const theme = {
  width: 'auto',
  height: '45px',
  color: '#f3f3f3',
  backgroundColor: '#2304fb',
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
    <React.Fragment>
      <StyledContainer isAnswerCorrect={isAnswerCorrect}>
        <div className="message">{renderMessage(submissionDetails)}</div>
        <Button onButtonClick={continueGame} disabledStyles={null}>
          Continue
        </Button>
      </StyledContainer>
    </React.Fragment>
  );
};

export default MessageModal;
