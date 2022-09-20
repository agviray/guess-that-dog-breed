import React, { useState, useEffect } from 'react';
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

const DogImage = ({ answerChoiceDetails }) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    // - Callback to use for filtering seen in getDogImage.
    const filterCorrectAnswer = (choice) => {
      return choice.type === 'correct';
    };

    // - Get random image of "correct answer" breed.
    const getDogImage = async () => {
      if (answerChoiceDetails.length === 0) {
        return;
      }
      const correctAnswer = answerChoiceDetails.filter(filterCorrectAnswer);
      const correctBreed = correctAnswer[0].value;
      const response = await dogceoapi.get(
        `/breed/${correctBreed}/images/random/1`,
        {}
      );

      const imageSrc = response.data.message[0];
      setImageSrc(imageSrc);
    };

    getDogImage();
  }, [answerChoiceDetails]);

  return (
    <StyledContainer>
      <img src={imageSrc} alt="dog" />
    </StyledContainer>
  );
};

export default DogImage;
