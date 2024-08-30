// 조언 : 좀 더 깔끔한 방법은 없으려나..
import blue from "./colors/blue";
import green from "./colors/green";
import violet from "./colors/violet";
import standard from "./size/standard";

const theme = {
  green: {
    light: green.light,
    dark: green.dark,
    standard,
  },
  blue: {
    light: blue.light,
    dark: blue.dark,
    standard,
  },
  violet: {
    light: violet.light,
    dark: violet.dark,
    standard,
  },
};

export default theme;

export type themeColorType = "green" | "blue" | "violet";
export type darkModeType = "light" | "dark";
export type themeType = {
  primary: {
    weak: string;
    moderate: string;
    strong: string;
  };
  secondary: {
    weak: string;
    moderate: string;
    strong: string;
  };
  success: {
    weak: string;
    moderate: string;
    strong: string;
  };
  warning: {
    weak: string;
    moderate: string;
    strong: string;
  };
  danger: {
    weak: string;
    moderate: string;
    strong: string;
  };
  grayscale: {
    weak: string;
    moderate: string;
    strong: string;
  };
  white: string;
  black: string;
};
