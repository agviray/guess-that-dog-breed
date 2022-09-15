import React from 'react';
import styled from 'styled-components';

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(51, 51, 51, 0.7);
  z-index: -1;
`;

const Overlay = ({ children }) => {
  return <StyledOverlay>{children}</StyledOverlay>;
};

export default Overlay;
