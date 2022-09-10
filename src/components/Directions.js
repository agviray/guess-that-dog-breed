import React from 'react';

const Directions = () => {
  // This will be a dropdown shown on the game's "title screen", along with the "Start" button.
  return (
    <div className="directionsContainer">
      <h2>How to Play</h2>
      <ul>
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
      </ul>
    </div>
  );
};

export default Directions;
