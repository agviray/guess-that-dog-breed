import React, { useState } from 'react';
import styled from 'styled-components';

const StyledAnswerContainer = styled.div`
  position: relative;

  span {
    display: block;
    padding: 0.75rem 1rem;
    background-color: ${({ isHover }) => (isHover ? 'aliceblue' : '')};
    border-radius: 25px;
  }

  input {
    display: inline-block;
    margin-right: 1rem;
  }
`;

/*
  // - Use this to insert a check or "X" mark next to the user's
  //   selected answer.
  label:after {
    display: inline-block;
    position: relative;
    top: 0;
    right: -20px;
    content: '';
    display: inline-block;
  }
  */

const AnswerChoice = ({ answerType, answerValue, onAnswerChoiceChange }) => {
  const [isHover, setIsHover] = useState(false);

  const capitalizeDogBreed = (breed) => {
    return breed.charAt(0).toUpperCase() + breed.slice(1);
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <StyledAnswerContainer
      isHover={isHover}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <label htmlFor={answerType}>
        <span>
          <input
            onChange={onAnswerChoiceChange}
            id={answerType}
            type="radio"
            value={answerValue}
            name="answer"
          />
          {capitalizeDogBreed(answerValue)}
        </span>
      </label>
    </StyledAnswerContainer>
  );
};

export default AnswerChoice;
