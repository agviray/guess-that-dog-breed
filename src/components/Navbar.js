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
  background-color: #fcf4ec;
  z-index: 999;

  nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    padding: 1.25rem 0;
    z-index: 2;

    span.icon {
      position: relative;
      display: inline-block;
      width: 35px;
      height: 35px;

      &:hover {
        cursor: pointer;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        transform: none;
        transition: all 0.2s ease-in-out;
      }

      &.arrow {
        margin-left: 1rem;

        &:hover {
          img {
            transform: translate(-7px);
          }
        }
      }

      &.settings {
        margin-right: 1rem;

        &:hover {
          img {
            transform: rotate(180deg);
          }
        }
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
        <SettingsMenu
          isMenuOpen={isMenuOpen}
          onIsMenuOpenChange={toggleMenuDisplay}
        />
        <Overlay
          overlayStatus={isMenuOpen}
          onOverlayStatusChange={setIsMenuOpen}
        />
      </nav>
    </StyledNavbar>
  );
};

export default Navbar;
