import React, { createContext, useContext, ReactNode } from 'react';
import theme, { darkModeType, themeColorType, themeType } from './theme';

const ThemeContext = createContext(theme['green']['light']);

export const ThemeProvider: React.FC<{ themeColor: themeColorType, darkMode: darkModeType, children: ReactNode }> = ({ themeColor, darkMode, children }) => {
  const selectedTheme : themeType = theme[themeColor][darkMode];
  return (
    <ThemeContext.Provider value={selectedTheme || theme['green']['light']}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
