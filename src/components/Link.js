import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  display: inline-block;
  cursor: default;
`;

const Link = ({ children, href }) => {
  const onClick = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <StyledLink onClick={onClick} href={href}>
        {children}
      </StyledLink>
    </React.Fragment>
  );
};

export default Link;
