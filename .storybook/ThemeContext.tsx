import React, { createContext, useContext, ReactNode } from "react";
import theme from "./theme";

const ThemeContext = createContext(theme["green"]["light"]);

export const ThemeProvider: React.FC<{
  themeColor: string;
  darkMode: string;
  children: ReactNode;
}> = ({ themeColor, darkMode, children }) => {
  // 에러 : typecheck 단계에서 객체를 읽는 key값으로써 신뢰도 문제가 생긴 것으로 보임.
  const selectedTheme = theme[themeColor][darkMode];
  return (
    <ThemeContext.Provider value={selectedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
