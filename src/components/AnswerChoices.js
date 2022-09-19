import React, { useState, useEffect } from 'react';
import dogceoapi from '../api/dogceoapi';

const AnswerChoices = () => {
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

  // Assigns one of the four dog breed strings as a 'correct' answer, and the
  // other breeds as 'incorrect' answers.
  useEffect(() => {
    const assignAnswerChoices = () => {
      if (breedsList.length === 0) {
        return;
      }

      const choices = breedsList.map((choice, index) => {
        return {
          type: `${index === 0 ? 'correct' : 'incorrect'}`,
          value: `${choice}`,
        };
      });

      return choices;
    };

    const updatedAnswerChoices = assignAnswerChoices();

    if (updatedAnswerChoices) {
      setAnswerChoices([...updatedAnswerChoices]);
    }
  }, [breedsList]);
  return (
    <React.Fragment>
      <div>
        <label htmlFor="answerOne">
          <input type="radio" id="answerOne" name="answer" />
          Answer Choice One
        </label>
        <br />
        <label htmlFor="answerTwo">
          <input type="radio" id="answerTwo" name="answer" />
          Answer Choice Two
        </label>
        <br />
        <label htmlFor="answerThree">
          <input type="radio" id="answerThree" name="answer" />
          Answer Choice Three
        </label>
        <br />
        <label htmlFor="answerFour">
          <input type="radio" id="answerFour" name="answer" />
          Answer Choice Four
        </label>
      </div>
    </React.Fragment>
  );
};

export default AnswerChoices;
