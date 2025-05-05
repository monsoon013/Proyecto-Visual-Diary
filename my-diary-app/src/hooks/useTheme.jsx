import { useState, useEffect } from 'react';

const useTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('displayMode') || 'light';
    const isDark = savedMode === 'dark';
    setDarkMode(isDark);

    document.body.classList.toggle('darkTheme', isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    const modeString = newMode ? 'dark' : 'light';
    localStorage.setItem('displayMode', modeString);

    document.body.classList.toggle('darkTheme', newMode);
  };

  return {
    darkMode,
    toggleTheme
  };
};

export default useTheme;