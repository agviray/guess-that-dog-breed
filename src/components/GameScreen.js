import React, { useState, useEffect } from 'react';
import dogceoapi from '../api/dogceoapi';
import Navbar from './Navbar';
import DogImage from './DogImage';
import AnswerChoices from './AnswerChoices';

const GameScreen = () => {
  const [correctBreed, setCorrectBreed] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const getDogImage = async () => {
      if (correctBreed === '') {
        return;
      }

      const response = await dogceoapi.get(
        `/breed/${correctBreed}/images/random/1`,
        {}
      );

      const imageSrc = response.data.message[0];
      setImageSrc(imageSrc);
    };

    getDogImage();
  }, [correctBreed]);

  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="question">Which breed does this dog belong to?</div>
        <br />
        <br />
        <DogImage imageSrc={imageSrc} />
        <br />
        <br />
        <AnswerChoices onCorrectBreedFiltered={setCorrectBreed} />
        <br />
        <div>
          <button>Submit</button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default GameScreen;
