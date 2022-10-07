import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  opacity: ${({ isImageReady }) => (isImageReady ? '1' : '0.3')};
  transform: ${({ isImageReady }) => (isImageReady ? 'scale(1)' : 'scale(0)')};
  transition: all 0.3s ease-out;

  img {
    width: 100%;
    border-radius: 25px;
    box-shadow: 1px 10px 35px -7px rgba(51, 51, 51, 0.75);
  }
`;

const DogImage = ({ isImageReady, onIsImageReadyChange, imageSrc }) => {
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
    <StyledContainer isImageReady={isImageReady}>
      {imageSrc !== '' ? <img ref={imageRef} src={imageSrc} alt="dog" /> : null}
    </StyledContainer>
  );
};

export default DogImage;
