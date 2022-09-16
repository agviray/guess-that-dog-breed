import React from 'react';
import styled from 'styled-components';

const StyledDirections = styled.ul`
  padding: 0 1rem;
  background-color: #f6f6ff;
  width: 80%;
  margin: 0 auto;

  li {
    padding-bottom: 1rem;

    &:first-child {
      padding-top: 1rem;
    }
  }
`;

const Directions = () => {
  return (
    <StyledDirections>
      <li>Click the "Start" button to begin the game.</li>
      <li>
        An image of a dog will be displayed, along with a set of answer choices
        that describe the breed of the dog shown in the image.
      </li>
      <li>
        Your goal is to select the correct breed of the dog that is shown.
      </li>
      <li>
        Select your answer from the available choices, and then click on the
        "Submit" button.
      </li>
      <li>That's all! Let's see how well you know your dogs!</li>
    </StyledDirections>
  );
};

export default Directions;
