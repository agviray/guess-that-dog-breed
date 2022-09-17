import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Link from './Link';
import Button from './Button';

const theme = {
  button: {
    bgColor: '#f44b12',
    textColor: '#f3f3f3',
    marginBtm: '2rem',
  },
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

const StyledContents = styled.div`
  header {
    h1 {
      text-align: center;
      padding-bottom: 3rem;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TitleScreen = () => {
  return (
    <StyledContainer>
      <StyledContents>
        <header>
          <h1 className="title">Guess That Dog Breed!</h1>
        </header>
        <main>
          <ThemeProvider theme={theme}>
            <Link href="/game">
              <Button>Start</Button>
            </Link>
          </ThemeProvider>
        </main>
      </StyledContents>
    </StyledContainer>
  );
};

export default TitleScreen;
