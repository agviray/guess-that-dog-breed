import React from 'react';
import styled from 'styled-components';
import GearIcon from '../assets/icons/gear-icon.svg';
import SettingsMenu from './SettingsMenu';

const StyledSettingsToggler = styled.div`
  display: inline-block;
  width: 30px;

  img {
    max-width: 100%;
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
