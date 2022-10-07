import React, { useRef } from 'react';
import styled from 'styled-components';

const StyledOverlay = styled.div`
  display: ${({ overlayStatus }) => (overlayStatus ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ hasChildren }) =>
    hasChildren ? 'rgba(51, 51, 51, 0.7)' : ''};
  overflow-y: auto;
`;

const StyledContents = styled.div`
  width: 80%;
  max-width: 700px;
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;
`;

const Overlay = ({ children, overlayStatus, onOverlayStatusChange }) => {
  const overlayContents = useRef(null);

  const toggleOverlayDisplay = (event) => {
    if (overlayContents.current.contains(event.target)) {
      return;
    }
    return overlayStatus ? onOverlayStatusChange(false) : null;
  };

  return (
    <StyledOverlay
      hasChildren={children}
      overlayStatus={overlayStatus}
      onClick={toggleOverlayDisplay}
    >
      <StyledContents ref={overlayContents} id="contents">
        {children}
      </StyledContents>
    </StyledOverlay>
  );
};

export default Overlay;
