import React from 'react';
import Link from './Link';

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <nav>
          <div className="logo">Guess That Dog Breed!</div>
          <div className="settingsIcon">Gear Icon</div>
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
