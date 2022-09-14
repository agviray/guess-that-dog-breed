import React, { useState, useEffect } from 'react';

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Listens for 'navigation event' dispatched by Link component's onClick handler.
  // When the navigation event occurs, update the Route component.
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
