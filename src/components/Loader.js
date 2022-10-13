import React from 'react';
import styled, { keyframes } from 'styled-components';
import PawPrint from '../assets/paw-print-01.svg';

const walkAnimation = keyframes`

  25% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 630px;
  margin: 3rem auto 0 auto;
  transform: rotate(-10deg);

  & div {
    display: inline-block;
    margin-left: 10px;
    width: 13%;
    opacity: 0;

    &:nth-child(odd) {
      transform: rotate(65deg);
    }

    &:nth-child(even) {
      position: relative;
      top: 60px;
      transform: rotate(106deg);
    }

    & img {
      width: 100%;
    }
  }
`;

const StyledPaw1 = styled.div`
  animation: ${walkAnimation} 0.75s linear 1 0.25s;
`;
const StyledPaw2 = styled.div`
  animation: ${walkAnimation} 0.75s linear 1 0.5s;
`;
const StyledPaw3 = styled.div`
  animation: ${walkAnimation} 0.75s linear 1 0.75s;
`;
const StyledPaw4 = styled.div`
  animation: ${walkAnimation} 0.75s linear 1 1s;
`;
const StyledPaw5 = styled.div`
  animation: ${walkAnimation} 0.75s linear 1 1.25s;
`;
const StyledPaw6 = styled.div`
  animation: ${walkAnimation} 0.75s linear 1 1.5s;
`;

const Loader = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledPaw1>
          <img src={PawPrint} alt="paw print" />
        </StyledPaw1>
        <StyledPaw2>
          <img src={PawPrint} alt="paw print" />
        </StyledPaw2>
        <StyledPaw3>
          <img src={PawPrint} alt="paw print" />
        </StyledPaw3>
        <StyledPaw4>
          <img src={PawPrint} alt="paw print" />
        </StyledPaw4>
        <StyledPaw5>
          <img src={PawPrint} alt="paw print" />
        </StyledPaw5>
        <StyledPaw6>
          <img src={PawPrint} alt="paw print" />
        </StyledPaw6>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Loader;
