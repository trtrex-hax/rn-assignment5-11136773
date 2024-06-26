import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const theme = {
    isDarkTheme,
    colors: isDarkTheme ? darkTheme : lightTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

const lightTheme = {
  backgroundColor: '#fff',
  textColor: '#000',
  tabBarBackground: '#ffffff',
};

const darkTheme = {
  backgroundColor: '#001123',
  textColor: '#fff',
  tabBarBackground: '#08192D',
};
