import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  padding: 0.75rem;
`;

const StyledHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;

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
      margin-top: -9.9px;
      margin-left: -7px;
      width: 12px;
      height: 12px;
      border-style: solid solid none none;
      border-color: #333333;
      border-width: 2px;
      transform: rotate(135deg);
    }
  }
`;

const StyledContentContainer = styled.ul`
  max-height: 0;
  overflow: hidden;
`;

const Directions = () => {
  return (
    <StyledContainer>
      <StyledHeadingContainer>
        <h2>How to Play</h2>
        <span className="toggler"></span>
      </StyledHeadingContainer>

      <StyledContentContainer>
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
