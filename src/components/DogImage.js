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
    border-radius: 25px;
    width: 100%;
  }
`;

const DogImage = ({ isImageReady, onIsImageReadyChange, imageSrc }) => {
  const imageRef = useRef(null);
  console.log(isImageReady);
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
