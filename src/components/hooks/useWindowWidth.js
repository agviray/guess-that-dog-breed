import { useState, useEffect } from 'react';

// - Gets window.innerWidth any time the window is resized, and
//   assigns it to variable, width.

// - Provides width for other components to reference.
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [width]);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  return width;
};

export default useWindowWidth;
