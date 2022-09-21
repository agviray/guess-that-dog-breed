import React, { useState } from 'react';
import styled from 'styled-components';
import Link from './Link';
import Button from './Button';
import Overlay from './Overlay';
import Directions from './Directions';

const StyledContainer = styled.div`
  position: relative;
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

const StyledButtonContainer = styled.span`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.titleScreenButton.marginBtm};
`;

const TitleScreen = () => {
  const [isDirectionsShown, setIsDirectionsShown] = useState(false);

  const toggleDirections = () => {
    setIsDirectionsShown(!isDirectionsShown);
  };

  return (
    <StyledContainer>
      <StyledContents>
        <header>
          <h1 className="title">Guess That Dog Breed!</h1>
        </header>
        <main>
          <Link href="/game">
            <StyledButtonContainer>
              <Button className="titleScreenButton">Start</Button>
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
  );
};

export default TitleScreen;
