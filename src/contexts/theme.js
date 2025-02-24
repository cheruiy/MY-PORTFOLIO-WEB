import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(localStorage.getItem('themeName') || 'light');

  useEffect(() => {
    // Automatically detect system theme
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleThemeChange = (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setThemeName(newTheme);
      localStorage.setItem('themeName', newTheme);
    };

    darkMediaQuery.addEventListener('change', handleThemeChange);
    return () => darkMediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeName', newTheme);
    setThemeName(newTheme);
  };

  return (
    <ThemeContext.Provider value={[{ themeName }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };