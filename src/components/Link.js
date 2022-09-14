import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  display: inline-block;
  cursor: default;
`;

const Link = ({ children, href }) => {
  return (
    <React.Fragment>
      <StyledLink href={href}>{children}</StyledLink>
    </React.Fragment>
  );
};

export default Link;
