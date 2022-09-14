import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import GearIcon from '../assets/icons/gear-icon.svg';

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
          <div className="settingsMenu">
            <ul>
              <li>Directions</li>
              <li>Timer Settings</li>
              <li>
                <Link href="/">Quit Game</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
