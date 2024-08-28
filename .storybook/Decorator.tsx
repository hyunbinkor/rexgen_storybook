import greenTheme from './theme/color/greenTheme'
import React from 'react';
import { useEffect } from 'react';

const setCSSColorVariables = (theme: any) => {
  const root = document.documentElement;

  root.style.setProperty('--color-primary', theme.colorPrimary);
  root.style.setProperty('--color-secondary', theme.colorSecondary);
  root.style.setProperty('--background-color', theme.appBg);
  root.style.setProperty('--text-color', theme.textColor);
  root.style.setProperty('--border-color', theme.appBorderColor);

  // 필요한 다른 변수들도 추가 가능
  // 예: root.style.setProperty('--font-base', theme.fontBase);
};

const setCSSSizeVariables = (theme: any) => {
  const root = document.documentElement;

  root.style.setProperty('--border-radius', `${theme.appBorderRadius}px`);
};

const Decorator = (Story: any, context: any) => {
  const { theme } = context.globals;

  useEffect(() => {
    const selectedTheme = greenTheme;
    setCSSColorVariables(selectedTheme);
  }, [theme]);

  return (
    <div>
      <Story />
    </div>
  );
};

export default Decorator;