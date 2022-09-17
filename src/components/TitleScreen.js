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
            <Button>Start</Button>
          </Link>
          <Button onButtonClick={toggleDirections}>Directions</Button>
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
