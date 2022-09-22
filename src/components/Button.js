import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.span`
  display: block;
  width: ${({ theme }) => theme.width};
  padding: 0.75rem 1rem;
  text-align: center;
  color: ${({ disabledStyles, theme }) =>
    disabledStyles ? disabledStyles.color : theme.color};
  background-color: ${({ disabledStyles, theme }) =>
    disabledStyles ? disabledStyles.backgroundColor : theme.backgroundColor};
`;

const Button = ({ children, onButtonClick, disabledStyles }) => {
  const handleButtonClick = () => {
    return onButtonClick ? onButtonClick() : null;
  };

  return (
    <StyledButton onClick={handleButtonClick} disabledStyles={disabledStyles}>
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
