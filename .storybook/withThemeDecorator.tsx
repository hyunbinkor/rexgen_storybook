import React from 'react';
import { Decorator } from '@storybook/react';
import { ThemeProvider } from "./ThemeContext";


const withThemeDecorator: Decorator = (Story, context) => {
  const { themeColor, darkMode, size } = context.globals;
  // 조언 : globalType의 종류도 type checking 메커니즘 만들어야 될 거 같은데 어디에 두면 좋을까요?
  // 조언 : rem으로 sizing을 하기 위해서 결국에 html 태그의 font-size 조정이 필요한데 어디서 하면 좋으려나요?

  return (
    <ThemeProvider themeColor={themeColor} darkMode={darkMode}>
      <Story />
    </ThemeProvider>
  );
};

export default withThemeDecorator;