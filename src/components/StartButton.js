import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
`;

const StyledStartButton = styled.span`
  display: inline-block;
  padding: 0.75rem 1rem;
  color: #f3f3f3;
  background-color: #f44b12;
`;

const StartButton = () => {
  return (
    <StyledContainer>
      <Link href="/game">
        <StyledStartButton>Start</StyledStartButton>
      </Link>
    </StyledContainer>
  );
};

export default StartButton;
