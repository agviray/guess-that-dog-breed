import React, { useRef } from 'react';
import styled from 'styled-components';

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 3rem 0;
  background-color: ${({ hasChildren }) =>
    hasChildren ? 'rgba(51, 51, 51, 0.7)' : 'rgba(51, 51, 51, 0)'};
  overflow-y: auto;
  transform: ${({ overlayStatus }) =>
    overlayStatus ? 'scale(1)' : 'scale(0)'};
  transition: all 0.3s ease-in-out;
`;

const StyledContents = styled.div`
  width: 80%;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  transform: ${({ overlayStatus }) =>
    overlayStatus ? 'scale(1)' : 'scale(0)'};
  transition: transform 0.3s ease-in-out 0.3s;
`;

const Overlay = ({ children, overlayStatus, onOverlayStatusChange }) => {
  const overlayContents = useRef(null);

  const toggleOverlayDisplay = (event) => {
    if (overlayContents.current.contains(event.target)) {
      return;
    }

    if (onOverlayStatusChange) {
      return overlayStatus ? onOverlayStatusChange(false) : null;
    }
  };

  return (
    <StyledOverlay
      hasChildren={children}
      overlayStatus={overlayStatus}
      onClick={toggleOverlayDisplay}
    >
      <StyledContents
        ref={overlayContents}
        id="contents"
        overlayStatus={overlayStatus}
      >
        {children}
      </StyledContents>
    </StyledOverlay>
  );
};

export default Overlay;
