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

const DogImage = ({ correctBreed }) => {
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
    <StyledContainer>
      <img src={imageSrc} alt="dog" />
    </StyledContainer>
  );
};

export default DogImage;
