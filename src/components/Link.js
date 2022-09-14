import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  cursor: default;
`;

const Link = ({ children, href }) => {
  const onClick = (event) => {
    event.preventDefault();
    // Calling window.history.pushState(...) alone, will change the url, but \
    // will not do a full page reload.
    window.history.pushState({}, '', href);

    // The following lines will dispatch a navigation event.
    // We are dispatching a navigation event in order to tell other sibling Route
    // components that the url changed.
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
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
