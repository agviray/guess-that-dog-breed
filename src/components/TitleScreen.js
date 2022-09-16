import React from 'react';
import { ThemeProvider } from 'styled-components';
import Link from './Link';
import Button from './Button';

const theme = {
  button: {
    bgColor: '#f44b12',
    textColor: '#f3f3f3',
  },
};

const TitleScreen = () => {
  return (
    <div className="titleScreenContainer">
      <h1 className="title">Guess That Dog Breed!</h1>
      <ThemeProvider theme={theme}>
        <Link href="/game">
          <Button>Start</Button>
        </Link>
      </ThemeProvider>
    </div>
  );
};

export default TitleScreen;
