import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import dogceoapi from '../api/dogceoapi';
import Loader from './Loader';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  img {
    width: 100%;
    max-width: 400px;
  }
`;

const DogImage = ({ onIsImageReadyChange, allAnswers, isImageReady }) => {
  const [imageSrc, setImageSrc] = useState('');
  const imageRef = useRef(null);

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
    let dogImage;
    const updateIsImageReady = () => {
      onIsImageReadyChange(true);
    };

    if (imageSrc !== '') {
      dogImage = imageRef.current;
      dogImage.addEventListener('load', updateIsImageReady);
    }

    return () => {
      if (dogImage) {
        dogImage.removeEventListener('load', updateIsImageReady);
      }
    };
  }, [imageSrc]);

  useEffect(() => {
    const clearImage = () => {
      setImageSrc('');
    };

    if (isImageReady === false) {
      clearImage();
    }
  }, [isImageReady]);

  return (
    <StyledContainer>
      {imageSrc !== '' ? (
        <img ref={imageRef} src={imageSrc} alt="dog" />
      ) : (
        <Loader />
      )}
    </StyledContainer>
  );
};

export default DogImage;
