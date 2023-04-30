import React, { useState, useEffect } from 'react';
import { Switch } from '@mui/material';

const Mater = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = JSON.parse(localStorage.getItem('dark'));
    setDarkMode(isDark);
  }, []);

  const handleDarkModeToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('dark', JSON.stringify(newDarkMode));
  };

  return (
    <div>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <Switch checked={darkMode} onChange={handleDarkModeToggle} />
    </div>
  );
};

export default Mater;
