import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import dogceoapi from '../api/dogceoapi';

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

const DogImage = ({ onIsImageReadyChange, allAnswers }) => {
  const [imageSrc, setImageSrc] = useState('');
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    const onImageLoaded = () => {
      onIsImageReadyChange(true);
    };
    image.addEventListener('load', onImageLoaded);

    return () => {
      image.removeEventListener('load', onImageLoaded);
    };
  }, []);

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
      setImageSrc(imageSrc);
    };

    getDogImage();
  }, [allAnswers]);

  return (
    <StyledContainer>
      <img ref={imageRef} src={imageSrc} alt="dog" />
    </StyledContainer>
  );
};

export default DogImage;
