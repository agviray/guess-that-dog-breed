import React from 'react';
import styled from 'styled-components';

const StyledStartButton = styled.a`
  display: inline-block;
  margin-bottom: 1rem;
  cursor: default;

  span {
    display: inline-block;
    padding: 0.75rem 1rem;
    color: #f3f3f3;
    background-color: #f44b12;
  }
`;

const StartButton = () => {
  return (
    <React.Fragment>
      <StyledStartButton href="#">
        <span>Start</span>
      </StyledStartButton>
    </React.Fragment>
  );
};

export default StartButton;
