import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.span`
  display: block;
  width: 200px;
  height: 45px;
  padding: 0.75rem 1rem;
  text-align: center;
  color: ${({ theme }) => theme.titleScreenButton.textColor};
  background-color: ${({ theme }) => theme.titleScreenButton.bgColor};
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
