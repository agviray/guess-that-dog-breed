import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledAnswerContainer = styled.div`
  padding: 0.75rem 0;

  input {
    margin-right: 1rem;
  }
`;

const AnswerChoices = ({ answerChoiceDetails }) => {
  const [answerChoices, setAnswerChoices] = useState([]);

  useEffect(() => {
    // - Randomize order of answer choices before displaying them.
    const shuffleAnswerChoices = () => {
      if (answerChoiceDetails.length === 0) {
        return;
      }
      let choices = answerChoiceDetails.sort(() => Math.random() - 0.5);
      console.log(choices);
      setAnswerChoices([...choices]);
    };

    shuffleAnswerChoices();
  }, [answerChoiceDetails]);

  const renderedAnswerChoices = answerChoices.map((choice, index) => {
    return (
      <StyledAnswerContainer key={index}>
        <label htmlFor={choice.type}>
          <input type="radio" id={choice.type} name="answer" />
          {choice.value}
        </label>
      </StyledAnswerContainer>
    );
  });

  return <React.Fragment>{renderedAnswerChoices}</React.Fragment>;
};

export default AnswerChoices;
