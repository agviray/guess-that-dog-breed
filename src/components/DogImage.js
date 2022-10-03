import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Loader from './Loader';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  img {
    width: 100%;
  }
`;

const DogImage = ({ onIsImageReadyChange, imageSrc }) => {
  const imageRef = useRef(null);

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
