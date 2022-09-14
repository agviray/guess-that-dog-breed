import React, { useEffect } from 'react';

const Route = ({ path, children }) => {
  useEffect(() => {
    // Listens for 'navigation event' dispatched by Link component's onClick handler.
    const onLocationChange = () => {
      console.log('The location has changed!');
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  // Listens for "route changed"
  return window.location.pathname === path ? children : null;
};

export default Route;
