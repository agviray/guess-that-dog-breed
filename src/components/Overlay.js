import React, { useRef } from 'react';
import styled from 'styled-components';

const StyledOverlay = styled.div`
  display: ${({ overlayStatus }) => (overlayStatus ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ hasChildren }) =>
    hasChildren ? 'rgba(51, 51, 51, 0.7)' : ''};
`;

const StyledOverlayContents = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #f6f6ff;
`;

const Overlay = ({ children, overlayStatus, onOverlayStatusChange }) => {
  const childrenContainerRef = useRef(null);

  const toggleOverlayDisplay = (event) => {
    if (childrenContainerRef.current.contains(event.target)) {
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
      <StyledOverlayContents ref={childrenContainerRef}>
        {children}
      </StyledOverlayContents>
    </StyledOverlay>
  );
};

export default Overlay;
