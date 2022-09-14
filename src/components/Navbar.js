import React from 'react';
import styled from 'styled-components';
import GearIcon from '../assets/icons/gear-icon.svg';
import SettingsMenu from './SettingsMenu';

const StyledSettingsToggler = styled.span`
  display: inline-block;
  width: 35px;
  height: 35px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <nav>
          <div className="logo">Guess That Dog Breed!</div>
          <StyledSettingsToggler>
            <img src={GearIcon} alt="gear icon" />
          </StyledSettingsToggler>
          <SettingsMenu />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
