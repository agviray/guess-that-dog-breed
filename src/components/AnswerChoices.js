import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledAnswerContainer = styled.div`
  position: relative;
  padding: 0.75rem 0;

  input {
    display: inline-block;
    margin-right: 1rem;
  }

  label:after {
    display: inline-block;
    position: relative;
    top: 0;
    right: -20px;
    content: '';
    display: inline-block;
  }
`;

const AnswerChoices = ({ allAnswers, onAnswerChoiceSelected }) => {
  const [answerChoices, setAnswerChoices] = useState([]);

  useEffect(() => {
    // - Randomize order of answer choices before displaying them.
    const shuffleAnswerChoices = () => {
      if (allAnswers.length === 0) {
        return;
      }
      let choices = allAnswers.sort(() => Math.random() - 0.5);
      setAnswerChoices([...choices]);
    };

    shuffleAnswerChoices();
  }, [allAnswers]);

  console.log(answerChoices);

  const updateSelectedAnswerChoice = (e) => {
    const allChoices = [...allAnswers];
    const checkedChoice = e.target.value;
    const updatedSelectedChoice = allChoices.filter((choice) => {
      if (choice.value === checkedChoice) {
        return choice;
      }
    });
    onAnswerChoiceSelected({ ...updatedSelectedChoice[0] });
  };

  const renderedAnswerChoices = answerChoices.map((choice, index) => {
    return (
      <StyledAnswerContainer key={index}>
        <label htmlFor={choice.type}>
          <input
            onChange={updateSelectedAnswerChoice}
            value={choice.value}
            type="radio"
            id={choice.type}
            name="answer"
          />
          {choice.value}
        </label>
      </StyledAnswerContainer>
    );
  });

  return <React.Fragment>{renderedAnswerChoices}</React.Fragment>;
};

export default AnswerChoices;
