import React, { useState, useEffect } from 'react';
import AnswerChoice from './AnswerChoice';

const AnswerChoices = ({ allAnswers, onAnswerChoiceSelected }) => {
  const [answerChoices, setAnswerChoices] = useState([]);

  useEffect(() => {
    // - Randomize order of answer choices before displaying them.
    const shuffleAnswerChoices = () => {
      let choices = allAnswers.sort(() => Math.random() - 0.5);
      setAnswerChoices([...choices]);
    };

    if (answerChoices.length === 0) {
      shuffleAnswerChoices();
    }
  }, [allAnswers]);

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
      <AnswerChoice
        key={index}
        answerType={choice.type}
        answerValue={choice.value}
        onAnswerChoiceChange={updateSelectedAnswerChoice}
      />
    );
  });

  return <React.Fragment>{renderedAnswerChoices}</React.Fragment>;
};

export default AnswerChoices;
