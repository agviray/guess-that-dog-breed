import React, { useState } from 'react';
import CountdownStartButton from './CountdownStartButton';

const CountdownTimer = () => {
  const [remainingTime, setRemainingTime] = useState(30);
  const [timeUpMessage, setTimeUpMessage] = useState('');

  const startCountdown = () => {
    let timeLeft = remainingTime;
    let interval;

    interval = setInterval(() => {
      timeLeft--;
      if (timeLeft >= 10) {
        setRemainingTime(timeLeft);
      }
      if (timeLeft <= 10) {
        // Apply the "time almost up" styles to numbers.
        // Maybe pass props to a RemainingTime styled component?
      }
      if (timeLeft < 10) {
        setRemainingTime(`0${timeLeft}`);
      }
      if (timeLeft === 0) {
        clearInterval(interval);
        setTimeUpMessage("Time's up!");
      }
    }, 1000);
  };

  const renderCountdownStartButton = () => {
    let text = 'Start Countdown';
    return (
      <CountdownStartButton
        buttonText={text}
        onButtonClicked={startCountdown}
      />
    );
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
      {renderCountdownStartButton()}
      <br />
      <div>{timeUpMessage}</div>
    </React.Fragment>
  );
};

export default CountdownTimer;
