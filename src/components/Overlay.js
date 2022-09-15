import React from 'react';
import styled from 'styled-components';

const StyledOverlay = styled.div`
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(51, 51, 51, 0.1);
  z-index: 1;
`;

const Overlay = ({ children, isMenuOpen, onIsMenuOpenChange }) => {
  const toggleOverlayDisplay = () => {
    return isMenuOpen ? onIsMenuOpenChange(false) : null;
  };

  return (
    <StyledOverlay onClick={toggleOverlayDisplay} isMenuOpen={isMenuOpen}>
      {children}
    </StyledOverlay>
  );
};

export default Overlay;
