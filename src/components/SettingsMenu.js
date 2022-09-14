import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const StyledSettingsMenu = styled.ul`
  position: absolute;
  bottom: -121px;
  right: 0;
  width: 170px;
  padding: 0.5rem;
  background-color: #f6f6ff;
  transform-origin: top right;
  transform: ${({ isMenuOpen }) => (isMenuOpen ? 'scale(1)' : 'scale(0)')};
  transition: all 0.2s ease;
`;

const StyledOption = styled.li`
  text-align: center;

  &:nth-of-type(1):after {
    content: '';
    display: block;
    margin: 0.5rem 0;
    width: 100%;
    height: 1px;
    background-color: #dbdbe7;
  }

  span {
    display: block;
    padding: 0.75rem 0;
  }
`;

const SettingsMenu = ({ isMenuOpen }) => {
  return (
    <StyledSettingsMenu isMenuOpen={isMenuOpen}>
      <StyledOption>
        <span>Directions</span>
      </StyledOption>
      <StyledOption>
        <Link href="/">
          <span>Quit Game</span>
        </Link>
      </StyledOption>
    </StyledSettingsMenu>
  );
};

export default SettingsMenu;
