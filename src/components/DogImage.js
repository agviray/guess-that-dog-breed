import React from 'react';

const DogImage = ({ imageSrc }) => {
  return (
    <React.Fragment>
      <img src={imageSrc} alt="dog" />
    </React.Fragment>
  );
};

export default DogImage;
