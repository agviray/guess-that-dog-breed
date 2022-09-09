import React, { useState } from 'react';

const CountdownStartButton = ({ buttonText, onButtonClicked }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = (event) => {
    isDisabled ? setIsDisabled(false) : setIsDisabled(true);
    onButtonClicked();
    event.preventDefault();
  };
  return (
    <React.Fragment>
      <button disabled={isDisabled} onClick={(event) => handleClick(event)}>
        {buttonText}
      </button>
    </React.Fragment>
  );
};

export default CountdownStartButton;
