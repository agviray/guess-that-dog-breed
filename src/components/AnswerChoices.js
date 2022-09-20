import React, { useState, useEffect } from 'react';

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
      <div key={index}>
        <label htmlFor={choice.type}>
          <input type="radio" id={choice.type} name="answer" />
          {choice.value}
        </label>
      </div>
    );
  });

  return <React.Fragment>{renderedAnswerChoices}</React.Fragment>;
};

export default AnswerChoices;
