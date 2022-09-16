import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.span`
  display: inline-block;
  padding: 0.75rem 1rem;
  color: ${({ theme }) => theme.button.textColor};
  background-color: ${({ theme }) => theme.button.bgColor};
`;

const Button = ({ children }) => {
  return (
    <React.Fragment>
      <StyledButton>{children}</StyledButton>
    </React.Fragment>
  );
};

export default Button;
