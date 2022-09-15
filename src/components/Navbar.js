import React, { useState } from 'react';
import styled from 'styled-components';
import Overlay from './Overlay';
import Link from './Link';
import ArrowBackIcon from '../assets/icons/back-arrow.svg';
import GearIcon from '../assets/icons/gear-icon.svg';
import SettingsMenu from './SettingsMenu';

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 0;
    background-color: #f6f6ff;
    z-index: 2;

    span.icon {
      position: relative;
      display: inline-block;
      width: 35px;
      height: 35px;
      z-index: 1000;

      &.arrow {
        margin-left: 1rem;
      }

      &.settings {
        margin-right: 1rem;
      }

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuDisplay = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledNavbar>
      <nav>
        <Link href="/">
          <span className={'icon arrow'}>
            <img src={ArrowBackIcon} alt="arrow back icon" />
          </span>
        </Link>
        <span className={'icon settings'} onClick={() => toggleMenuDisplay()}>
          <img src={GearIcon} alt="gear icon" />
        </span>
        <SettingsMenu isMenuOpen={isMenuOpen} />
        <Overlay isMenuOpen={isMenuOpen} onIsMenuOpenChange={setIsMenuOpen} />
      </nav>
    </StyledNavbar>
  );
};

export default Navbar;
