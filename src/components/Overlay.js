import React from 'react';
import styled from 'styled-components';

const StyledOverlay = styled.div`
  display: ${({ overlayStatus }) => (overlayStatus ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Overlay = ({ children, overlayStatus, onOverlayStatusChange }) => {
  const toggleOverlayDisplay = () => {
    return overlayStatus ? onOverlayStatusChange(false) : null;
  };

  return (
    <StyledOverlay onClick={toggleOverlayDisplay} overlayStatus={overlayStatus}>
      {children}
    </StyledOverlay>
  );
};

export default Overlay;
