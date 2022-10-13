import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Overlay from './Overlay';
import Directions from './Directions';
import Link from './Link';

const StyledSettingsMenu = styled.ul`
  position: absolute;
  bottom: -121px;
  right: 0;
  width: 170px;
  padding: 0.5rem;
  background-color: #fcf4ec;
  box-shadow: 1px 10px 35px -7px rgba(51, 51, 51, 0.75);
  border-radius: 15px;
  transform-origin: top right;
  transform: ${({ isMenuOpen }) => (isMenuOpen ? 'scale(1)' : 'scale(0)')};
  transition: all 0.1s ease;
  z-index: 1001;
`;

const StyledOption = styled.li`
  text-align: center;

  &:nth-of-type(1):after {
    content: '';
    display: block;
    margin: 0.5rem 0;
    width: 100%;
    height: 1px;
    background-color: #e3d8cd;
  }

  span {
    display: block;
    padding: 0.75rem 0;
    border-radius: 15px;

    &:hover {
      cursor: default;
      background-color: #f6eadd;
    }
  }
`;

const SettingsMenu = ({ isMenuOpen, onIsMenuOpenChange }) => {
  const [wasOptionSelected, setWasOptionSelected] = useState(false);

  const showSelectedOption = () => {
    onIsMenuOpenChange();
    return setWasOptionSelected(!wasOptionSelected);
  };

  const theme = {
    width: '150px',
    height: '45px',
    color: '#f3f3f3',
    backgroundColor: '#7e5bad',

    hoverTheme: {
      backgroundColor: '#c59afc',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Overlay
        overlayStatus={wasOptionSelected}
        onOverlayStatusChange={setWasOptionSelected}
      >
        <Directions
          directionsStatus={wasOptionSelected}
          onDirectionsStatusChange={setWasOptionSelected}
        />
      </Overlay>
      <StyledSettingsMenu isMenuOpen={isMenuOpen}>
        <StyledOption onClick={showSelectedOption}>
          <span>Directions</span>
        </StyledOption>
        <StyledOption>
          <Link href="/">
            <span>Quit Game</span>
          </Link>
        </StyledOption>
      </StyledSettingsMenu>
    </ThemeProvider>
  );
};

export default SettingsMenu;
