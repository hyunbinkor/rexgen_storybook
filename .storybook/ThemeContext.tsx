import React, { createContext, useContext, ReactNode } from 'react';
import theme from './theme';

const ThemeContext = createContext(theme['green']['light']);

export const ThemeProvider: React.FC<{ themeColor: string, darkMode: string, children: ReactNode }> = ({ themeColor, darkMode, children }) => {
  const selectedTheme = theme[themeColor][darkMode];
  return (
    <ThemeContext.Provider value={selectedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
