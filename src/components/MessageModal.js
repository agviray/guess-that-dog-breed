import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './Button';
import HappyDog from '../assets/bernese-mountain.png';
import SadDog from '../assets/bullmastiff.png';
import Drop from '../assets/sweat-drop.svg';

const StyledContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
  background-color: #fcf4ec;
  border-radius: 15px;
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

  h2 {
    padding-bottom: 1.5rem;
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

const StyledImageContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 90%;
  max-width: 150px;
  padding-bottom: 2rem;

  @media screen and (min-width: 900px) {
    max-width: 200px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const StyledDropContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 15px;
  width: 25px;
  height: 40px;

  @media screen and (min-width: 900px) {
    width: 35px;
    height: 50px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const theme = {
  width: 'auto',
  height: '45px',
  color: '#f3f3f3',
  backgroundColor: '#7e5bad',

  hoverTheme: {
    backgroundColor: '#c59afc',
  },
};

// - This function passes the original theme along with any additional
//   styles to ThemeProvider.
// const passThemeStyles = (theme, answerStatus) => {
//   const newTheme = {
//     ...theme,
//     color: `${answerStatus ? '#3fcf3f' : '#e22929'}`,
//   };
//   return newTheme;
// };

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

  const renderSuccessDog = () => {
    return (
      <StyledImageContainer>
        <img src={HappyDog} alt="happy dog" />
      </StyledImageContainer>
    );
  };

  const renderFailDog = () => {
    return (
      <StyledImageContainer>
        <img src={SadDog} alt="sad dog" />
        <StyledDropContainer>
          <img src={Drop} alt="drop" />
        </StyledDropContainer>
      </StyledImageContainer>
    );
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
        <h2>{message.heading}</h2>
        {isAnswerCorrect ? renderSuccessDog() : renderFailDog()}
        <div className="messageBody">{message.body}</div>
        <div className="buttonContainer">
          <Button
            isButtonAvailable={true}
            onButtonClick={continueGame}
            specialStyles={null}
          >
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
    <ThemeProvider theme={theme}>
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
