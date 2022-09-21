import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.span`
  display: block;
  width: ${({ theme }) => theme.width};
  padding: 0.75rem 1rem;
  text-align: center;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const Button = ({ children, onButtonClick }) => {
  const handleButtonClick = () => {
    return onButtonClick ? onButtonClick() : null;
  };

  return (
    <StyledButton onClick={handleButtonClick}>
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
