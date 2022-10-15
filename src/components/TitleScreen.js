import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Link from './Link';
import Button from './Button';
import Overlay from './Overlay';
import Directions from './Directions';
import DogGroup from '../assets/dog-group-silhouette-04.svg';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
      padding-bottom: 2rem;
      font-size: 10vw;
      text-align: center;

      @media screen and (min-width: 800px) {
        font-size: 80px;
      }
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
  padding-bottom: 3rem;

  img {
    width: 100%;
  }
`;

const StyledButtonContainer = styled.span`
  display: inline-block;
  margin-bottom: 2rem;
`;

const theme = {
  width: '150px',
  height: '45px',
  color: '#f3f3f3',
  backgroundColor: '#7e5bad',

  hoverTheme: {
    backgroundColor: '#c59afc',
  },
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
                <Button className="titleScreenButton" isButtonAvailable={true}>
                  Play
                </Button>
              </StyledButtonContainer>
            </Link>
            <StyledButtonContainer>
              <Button
                className="titleScreenButton"
                isButtonAvailable={true}
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
