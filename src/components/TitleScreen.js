import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Link from './Link';
import Button from './Button';
import Overlay from './Overlay';
import Directions from './Directions';
import DogGroup from '../assets/dog-group-silhouette-03.svg';

const StyledContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const StyledContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 3rem;

  header {
    h1 {
      text-align: center;
      padding-bottom: 2rem;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledImageContainer = styled.div`
  width: 100%;
  max-width: 900px;
  padding-bottom: 4rem;

  img {
    width: 100%;
  }
`;

const StyledButtonContainer = styled.span`
  display: inline-block;
  margin-bottom: 2rem;
`;

const theme = {
  width: '200px',
  height: '45px',
  color: '#f3f3f3',
  backgroundColor: '#f44b12',
};

const TitleScreen = () => {
  const [isDirectionsShown, setIsDirectionsShown] = useState(false);

  const toggleDirections = () => {
    setIsDirectionsShown(!isDirectionsShown);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <StyledContents>
          <header>
            <h1 className="title">Guess That Dog Breed!</h1>
          </header>
          <main>
            <StyledImageContainer>
              <img src={DogGroup} alt="dogs" />
            </StyledImageContainer>
            <Link href="/game">
              <StyledButtonContainer>
                <Button className="titleScreenButton">Play</Button>
              </StyledButtonContainer>
            </Link>
            <StyledButtonContainer>
              <Button
                className="titleScreenButton"
                onButtonClick={toggleDirections}
              >
                Directions
              </Button>
            </StyledButtonContainer>
          </main>
        </StyledContents>
        <Overlay
          overlayStatus={isDirectionsShown}
          onOverlayStatusChange={setIsDirectionsShown}
        >
          <Directions
            directionsStatus={isDirectionsShown}
            onDirectionsStatusChange={setIsDirectionsShown}
          />
        </Overlay>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default TitleScreen;
