import React, { useState, useEffect } from 'react';
import dogceoapi from '../api/dogceoapi';

const AnswerChoices = ({ onCorrectBreedFiltered }) => {
  const [breedsList, setBreedsList] = useState([]);
  const [answerChoices, setAnswerChoices] = useState([]);

  // Builds list of dog breeds to use as answer choices.
  useEffect(() => {
    const getRandomDogBreeds = async () => {
      const response = await dogceoapi.get('/breeds/list/random/4', {});

      const breeds = response.data.message;
      setBreedsList([...breeds]);
    };

    getRandomDogBreeds();
  }, []);

  // Assigns and randomizes answer choices.
  useEffect(() => {
    const assignAnswerChoices = () => {
      if (breedsList.length === 0) {
        return;
      }

      // Sets the first breed in breedsList as the 'correct' answer.
      let choices = breedsList.map((choice, index) => {
        return {
          type: `${index === 0 ? 'correct' : `incorrect-${index}`}`,
          value: `${choice}`,
        };
      });

      // Randomize order of answer choices.
      choices = choices.sort(() => Math.random() - 0.5);
      setAnswerChoices([...choices]);
    };

    assignAnswerChoices();
  }, [breedsList]);

  useEffect(() => {
    const filterCorrectAnswerBreed = (choice) => {
      return choice.type === 'correct';
    };

    if (answerChoices.length !== 0) {
      const correctAnswerBreed = answerChoices.filter(filterCorrectAnswerBreed);
      onCorrectBreedFiltered(correctAnswerBreed[0].value);
    }
  }, [answerChoices]);

  const renderedAnswerChoices = answerChoices.map((choice, index) => {
    return (
      <div key={index}>
        <label htmlFor={choice.type}>
          <input type="radio" id={choice.type} name="answer" />
          {choice.value}
        </label>
      </div>
    );
  });

  return <React.Fragment>{renderedAnswerChoices}</React.Fragment>;
};

export default AnswerChoices;
