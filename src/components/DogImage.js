import React, { useState, useEffect } from 'react';
import dogceoapi from '../api/dogceoapi';

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
    <React.Fragment>
      <img src={imageSrc} alt="dog" />
    </React.Fragment>
  );
};

export default DogImage;
