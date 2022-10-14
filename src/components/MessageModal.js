import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './Button';
import SadDog from '../assets/sad-dog-01.svg';
import HappyDog from '../assets/happy-dog-01.svg';

const StyledContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
  z-index: 10;
  background-color: ${({ isAnswerCorrect }) =>
    isAnswerCorrect ? 'rgba(131, 215, 147, 0.9)' : 'rgba(255, 117, 117, 0.9)'};
`;

const StyledMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 750px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  .dog {
    display: inline-block;
    width: 90%;
    max-width: 250px;
    padding-bottom: 2rem;

    @media screen and (min-width: 900px) {
      max-width: 350px;
    }

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  h2 {
    padding-bottom: 2rem;
    color: #f3f3f3;
  }

  .messageBody {
    padding-bottom: 2rem;
  }

  .buttonContainer {
    display: inline-block;
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
  };
  return newTheme;
};

const MessageModal = ({ submissionDetails, resetGameScreen }) => {
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  useEffect(() => {
    const postSubmitDetails = { ...submissionDetails };
    if (postSubmitDetails.isCorrect) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  }, [submissionDetails]);

  const capitalizeDogBreed = (breed) => {
    return breed.charAt(0).toUpperCase() + breed.slice(1);
  };

  const renderMessageContents = (postSubmitDetails) => {
    const message = postSubmitDetails.isCorrect
      ? {
          heading: 'Congrats!',
          body: `Your answer is correct!`,
          imageSrc: HappyDog,
        }
      : {
          heading: 'Sorry!',
          body: `Your answer is incorrect. The correct answer is ${capitalizeDogBreed(
            postSubmitDetails.correctAnswer
          )}.`,
          imageSrc: SadDog,
        };

    return (
      <React.Fragment>
        <div className="dog">
          <img
            src={message.imageSrc}
            alt={postSubmitDetails.isCorrect ? 'happy dog' : 'sad dog'}
          />
        </div>
        <h2>{message.heading}</h2>
        <div className="messageBody">{message.body}</div>
        <div className="buttonContainer">
          <Button onButtonClick={continueGame} specialStyles={null}>
            Continue
          </Button>
        </div>
      </React.Fragment>
    );
  };

  const continueGame = () => {
    resetGameScreen();
  };

  return (
    <ThemeProvider theme={() => passThemeStyles(theme, isAnswerCorrect)}>
      <StyledContainer isAnswerCorrect={isAnswerCorrect}>
        <div className="contents">
          <StyledMessage>
            {isAnswerCorrect !== null
              ? renderMessageContents(submissionDetails)
              : null}
          </StyledMessage>
        </div>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default MessageModal;
