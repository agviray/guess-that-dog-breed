import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import dogceoapi from '../api/dogceoapi';
import useWindowWidth from './hooks/useWindowWidth';
import Navbar from './Navbar';
import DogImage from './DogImage';
import AnswerChoices from './AnswerChoices';
import GameControls from './GameControls';

const StyledMainContents = styled.div`
  position: relative;
  padding-top: 110px;

  .question {
    padding-bottom: 2rem;
  }

  .answerChoicesContainer,
  .buttonContainer {
    margin-top: 2rem;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: space-evenly;

    .flexChild {
      padding-bottom: 2rem;

      &:first-child {
        width: 40%;
      }

      &:last-child {
        width: 50%;
      }
    }

    .question {
      padding-bottom: 0;
    }

    .answerChoicesContainer,
    .buttonContainer {
      margin-top: none;
    }
  }
`;

const Message = styled.div`
  padding-top: 2rem;
`;

const GameScreen = () => {
  const windowWidth = useWindowWidth();

  const [isImageReady, setIsImageReady] = useState(false);
  const [allAnswers, setAllAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [message, setMessage] = useState('');
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  useEffect(() => {
    // - Request 4 random dog breeds.
    const getRandomDogBreeds = async () => {
      const response = await dogceoapi.get('/breeds/list/random/4', {});
      const breeds = response.data.message;
      return [...breeds];
    };

    // - Takes array of dog breeds returned from getRandomDogBreeds and
    //   creates answer choice details for each breed.
    const assignAnswerChoicesDetails = async () => {
      const receivedBreeds = await getRandomDogBreeds();
      const answerChoiceDetails = receivedBreeds.map((breed, index) => {
        return {
          type: `${index === 0 ? 'correct' : `incorrect-${index}`}`,
          value: `${breed}`,
          isCorrect: index === 0 ? true : false,
        };
      });

      setAllAnswers([...answerChoiceDetails]);
    };

    if (isImageReady === false) {
      assignAnswerChoicesDetails();
    }
  }, [isImageReady]);

  useEffect(() => {
    if (message === '') {
      return;
    } else {
      setIsAnswerChecked(true);
    }
  }, [message]);

  const filterCorrectAnswer = (choice) => {
    return choice.isCorrect;
  };

  const resetGameScreen = () => {
    setIsImageReady(false);
    setAllAnswers([]);
    setSelectedAnswer({});
    setMessage('');
    setIsAnswerChecked(false);
  };

  const renderAnswers = () => {
    return (
      <React.Fragment>
        <div className="answerChoicesContainer">
          <AnswerChoices
            allAnswers={allAnswers}
            onAnswerChoiceSelected={setSelectedAnswer}
          />
        </div>
        <Message>{message}</Message>
        <GameControls
          selectedAnswer={selectedAnswer}
          identifiedAnswer={
            allAnswers.length === 0
              ? null
              : allAnswers.filter(filterCorrectAnswer)[0].value
          }
          isAnswerChecked={isAnswerChecked}
          onMessageChange={setMessage}
          resetGameScreen={resetGameScreen}
        />
      </React.Fragment>
    );
  };

  const renderColumnLayout = () => {
    return (
      <React.Fragment>
        <div className="question">Which breed does this dog belong to?</div>
        <DogImage
          onIsImageReadyChange={setIsImageReady}
          allAnswers={allAnswers}
          isImageReady={isImageReady}
        />
        {isImageReady ? renderAnswers() : null}
      </React.Fragment>
    );
  };

  const renderRowLayout = () => {
    return (
      <React.Fragment>
        <div className="flexChild">
          <div className="question">Which breed does this dog belong to?</div>
          {isImageReady ? renderAnswers() : null}
        </div>
        <div className="flexChild">
          <DogImage
            onIsImageReadyChange={setIsImageReady}
            allAnswers={allAnswers}
            isImageReady={isImageReady}
          />
        </div>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <StyledMainContents>
          {windowWidth < 800 ? renderColumnLayout() : renderRowLayout()}
        </StyledMainContents>
      </main>
    </React.Fragment>
  );
};

export default GameScreen;
