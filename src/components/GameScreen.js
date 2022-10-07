import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import dogceoapi from '../api/dogceoapi';
import useWindowWidth from './hooks/useWindowWidth';
import Navbar from './Navbar';
import DogImage from './DogImage';
import AnswerChoices from './AnswerChoices';
import GameControls from './GameControls';
import Loader from './Loader';
import MessageModal from './MessageModal';

const StyledMainContents = styled.div`
  position: relative;
  padding-top: 150px;

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
    padding-top: 200px;

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

const GameScreen = () => {
  const windowWidth = useWindowWidth();
  const [imageSrc, setImageSrc] = useState('');
  const [isImageReady, setIsImageReady] = useState(false);
  const [allAnswers, setAllAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [submissionDetails, setSubmissionDetails] = useState({});

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
    // - Callback to use for filtering seen in getDogImage.
    const filterCorrectAnswer = (choice) => {
      return choice.type === 'correct';
    };

    // - Get random image of "correct answer" breed.
    const getDogImage = async () => {
      if (allAnswers.length === 0) {
        return;
      }
      const correctAnswer = allAnswers.filter(filterCorrectAnswer);
      const correctBreed = correctAnswer[0].value;
      const response = await dogceoapi.get(
        `/breed/${correctBreed}/images/random/1`,
        {}
      );

      const imageSrc = response.data.message[0];
      setTimeout(() => setImageSrc(imageSrc), 1500);
    };

    if (allAnswers.length !== 0) {
      getDogImage();
    }
  }, [allAnswers]);

  useEffect(() => {
    if (Object.keys(submissionDetails).length === 0) {
      return;
    } else {
      setIsAnswerChecked(true);
    }
  }, [submissionDetails]);

  const filterCorrectAnswer = (choice) => {
    return choice.isCorrect;
  };

  const resetGameScreen = () => {
    setImageSrc('');
    setIsImageReady(false);
    setAllAnswers([]);
    setSelectedAnswer({});
    setIsAnswerChecked(false);
    setSubmissionDetails({});
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
        <GameControls
          selectedAnswer={selectedAnswer}
          identifiedAnswer={
            allAnswers.length === 0
              ? null
              : allAnswers.filter(filterCorrectAnswer)[0].value
          }
          onSubmissionDetailsChange={setSubmissionDetails}
        />
      </React.Fragment>
    );
  };

  const renderText = () => {
    return (
      <React.Fragment>
        <div className="question">Which breed does this dog belong to?</div>
        <div className="answerChoicesContainer">
          <AnswerChoices
            allAnswers={allAnswers}
            onAnswerChoiceSelected={setSelectedAnswer}
          />
        </div>
        <GameControls
          selectedAnswer={selectedAnswer}
          identifiedAnswer={
            allAnswers.length === 0
              ? null
              : allAnswers.filter(filterCorrectAnswer)[0].value
          }
          onSubmissionDetailsChange={setSubmissionDetails}
        />
      </React.Fragment>
    );
  };

  const renderColumnLayout = () => {
    return (
      <React.Fragment>
        {isImageReady ? (
          <div className="question">Which breed does this dog belong to?</div>
        ) : null}
        <DogImage
          isImageReady={isImageReady}
          onIsImageReadyChange={setIsImageReady}
          imageSrc={imageSrc}
        />
        {isImageReady ? renderAnswers() : null}
      </React.Fragment>
    );
  };

  const renderRowLayout = () => {
    return (
      <React.Fragment>
        <div className="flexChild">{isImageReady ? renderText() : null}</div>
        <div className="flexChild">
          <DogImage
            isImageReady={isImageReady}
            onIsImageReadyChange={setIsImageReady}
            imageSrc={imageSrc}
          />
        </div>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {isAnswerChecked ? (
        <MessageModal
          submissionDetails={submissionDetails}
          resetGameScreen={resetGameScreen}
        />
      ) : null}
      <header>
        <Navbar />
      </header>
      <main>
        <StyledMainContents>
          {windowWidth < 800 ? renderColumnLayout() : renderRowLayout()}
        </StyledMainContents>
        {isImageReady ? null : <Loader />}
      </main>
    </React.Fragment>
  );
};

export default GameScreen;
