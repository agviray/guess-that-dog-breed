import React from 'react';

const Directions = () => {
  // This will be a dropdown shown on the game's "title screen", along with the "Start" button.
  return (
    <div className="directionsContainer">
      <h2>Directions</h2>
      <ul>
        <li>Click the "Start" button to begin the game.</li>
        <li>
          An image of a dog will be displayed, along with a set of answer
          choices that best describe the breed of the dog shown in the image.
        </li>
        <li>
          Your goal is to select the correct breed of the dog that is shown.
        </li>
        <li>Choose the best answer, and click on the submit button.</li>
        <li>That's all! Let's see how well you know your dog!</li>
      </ul>
    </div>
  );
};

export default Directions;
