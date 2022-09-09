import React, { useState } from 'react';

const CountdownTimer = () => {
  const [remainingTime, setRemainingTime] = useState(10);
  const [timeUpMessage, setTimeUpMessage] = useState('');

  const startCountdown = (event) => {
    let timeLeft = remainingTime;
    let interval;

    interval = setInterval(() => {
      timeLeft--;
      if (timeLeft >= 10) {
        setRemainingTime(timeLeft);
      }
      if (timeLeft <= 10) {
        // Apply the "time almost up" styles to numbers.
      }
      if (timeLeft < 10) {
        setRemainingTime(`0${timeLeft}`);
      }
      if (timeLeft === 0) {
        clearInterval(interval);
        setTimeUpMessage("Time's up!");
      }
    }, 1000);

    event.preventDefault();
  };

  return (
    <React.Fragment>
      <h1>Hello CountdownTimer</h1>
      <br />
      <div>
        Time left:
        <span className="remainingTime"> 00:{remainingTime}</span>
      </div>
      <br />
      <button onClick={(event) => startCountdown(event)}>
        Start Countdown
      </button>
      <br />
      <div>{timeUpMessage}</div>
    </React.Fragment>
  );
};

export default CountdownTimer;
