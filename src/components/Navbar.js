import React, { useState } from 'react';
import styled from 'styled-components';
import Overlay from './Overlay';
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
  }
`;

const StyledLogo = styled.div`
  margin-left: 1rem;
`;

const StyledSettingsToggler = styled.span`
  position: relative;
  display: inline-block;
  width: 35px;
  height: 35px;
  margin-right: 1rem;
  z-index: 1000;

  img {
    max-width: 100%;
    max-height: 100%;
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
        <StyledLogo>Logo</StyledLogo>
        <StyledSettingsToggler onClick={() => toggleMenuDisplay()}>
          <img src={GearIcon} alt="gear icon" />
        </StyledSettingsToggler>
        <SettingsMenu isMenuOpen={isMenuOpen} />
        <Overlay isMenuOpen={isMenuOpen} onIsMenuOpenChange={setIsMenuOpen} />
      </nav>
    </StyledNavbar>
  );
};

export default Navbar;
