import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.span`
  display: block;
  width: ${({ theme }) => theme.width};
  min-width: 120px;
  padding: 0.75rem 1rem;
  text-align: center;
  color: ${({ specialStyles, theme }) =>
    specialStyles ? specialStyles.color : theme.color};
  background-color: ${({ specialStyles, theme }) =>
    specialStyles ? specialStyles.backgroundColor : theme.backgroundColor};
  border: ${({ theme }) => (theme.border ? theme.border : '')};
  border-radius: 25px;

  &:hover {
    cursor: default;
  }
`;

const Button = ({ children, onButtonClick, specialStyles }) => {
  const handleButtonClick = () => {
    return onButtonClick ? onButtonClick() : null;
  };

  return (
    <StyledButton onClick={handleButtonClick} specialStyles={specialStyles}>
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
