import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  max-width: 400px;
  max-height: 500px;
`;

const DogImage = ({ src }) => {
  return (
    <React.Fragment>
      <div>
        <StyledImage src={src} alt="dog image" />
      </div>
    </React.Fragment>
  );
};

export default DogImage;
