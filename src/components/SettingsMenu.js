import React from 'react';

import Link from './Link';

const SettingsMenu = () => {
  return (
    <div>
      <ul>
        <li>Directions</li>
        <li>Timer Settings</li>
        <li>
          <Link href="/">Quit Game</Link>
        </li>
      </ul>
    </div>
  );
};

export default SettingsMenu;
