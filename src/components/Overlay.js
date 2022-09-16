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

const StyledChildrenContainer = styled.div`
  display: inline-block;
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
      <StyledChildrenContainer ref={childrenContainerRef}>
        {children}
      </StyledChildrenContainer>
    </StyledOverlay>
  );
};

export default Overlay;
