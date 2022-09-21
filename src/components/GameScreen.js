import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import dogceoapi from '../api/dogceoapi';
import Navbar from './Navbar';
import DogImage from './DogImage';
import AnswerChoices from './AnswerChoices';

const StyledMainContents = styled.div`
  padding-top: 110px;

  .question {
    padding-bottom: 2rem;
  }

  .answerChoicesContainer,
  .buttonContainer {
    padding-top: 2rem;
  }
`;

const GameScreen = () => {
  const [isImageReady, setIsImageReady] = useState(false);
  const [answerChoiceDetails, setAnswerChoiceDetails] = useState([]);

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
        };
      });

      setAnswerChoiceDetails([...answerChoiceDetails]);
    };

    assignAnswerChoicesDetails();
  }, []);

  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <StyledMainContents>
          <div className="question">Which breed does this dog belong to?</div>
          <DogImage
            onIsImageReadyChange={setIsImageReady}
            answerChoiceDetails={answerChoiceDetails}
          />
          <div className="answerChoicesContainer">
            {isImageReady ? (
              <AnswerChoices answerChoiceDetails={answerChoiceDetails} />
            ) : null}
          </div>
          <div className="buttonContainer">
            <button>Submit</button>
          </div>
        </StyledMainContents>
      </main>
    </React.Fragment>
  );
};

export default GameScreen;
