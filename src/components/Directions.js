import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  padding: 0.75rem;
  background-color: lightgray;
`;

const StyledHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .h2 {
    display: inline-block;
  }

  .toggler {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;

    &:before {
      display: inline-block;
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: ${({ isToggled }) => (isToggled ? '-3.9px' : '-9.9px')};
      margin-left: -7px;
      width: 12px;
      height: 12px;
      border-style: solid solid none none;
      border-color: #333333;
      border-width: 2px;
      transform: ${({ isToggled }) =>
        isToggled ? 'rotate(-45deg)' : 'rotate(135deg)'};
      transition: all 0.2s ease;
    }
  }
`;

const StyledContentContainer = styled.ul`
  max-height: 0px;
  overflow: hidden;
  transition: all 0.2s ease;

  li:first-child {
    padding-top: 1rem;
  }
`;

const Directions = () => {
  const [isToggled, setIsToggled] = useState(false);
  const contentRef = useRef();

  useEffect(() => {
    const content = contentRef.current;
    const contentScrollHeight = content.scrollHeight;

    if (isToggled) {
      content.style.maxHeight = `${contentScrollHeight}px`;
    } else {
      content.style.maxHeight = '';
    }
  }, [isToggled]);

  return (
    <StyledContainer>
      <StyledHeadingContainer isToggled={isToggled}>
        <h2>How to Play</h2>
        <span
          className="toggler"
          onClick={() => setIsToggled(!isToggled)}
        ></span>
      </StyledHeadingContainer>
      <StyledContentContainer ref={contentRef} isToggled={isToggled}>
        <li>Click the "Start" button to begin the game.</li>
        <li>
          An image of a dog will be displayed, along with a set of answer
          choices that describe the breed of the dog shown in the image.
        </li>
        <li>
          Your goal is to select the correct breed of the dog that is shown.
        </li>
        <li>
          Select your answer from the available choices, and then click on the
          "Submit" button.
        </li>
        <li>That's all! Let's see how well you know your dogs!</li>
      </StyledContentContainer>
    </StyledContainer>
  );
};

export default Directions;
