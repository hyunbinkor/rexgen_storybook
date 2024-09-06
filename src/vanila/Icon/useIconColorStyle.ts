import { useTheme } from "../../../.storybook/ThemeContext";
import { iconColor, isIconColor } from "./iconTypes";

interface IconColorProps {
  // 보완 : 정규식 타입 검사 string -> #000000
  color: iconColor | string;
}

const useIconColorStyle = ({ color }: IconColorProps) => {
  // 전체 테마 색상 불러오기
  const themeColors = useTheme();

  const colors: Record<iconColor, { color: string; fill: string }> = {
    primary: {
      color: themeColors.primary.strong,
      fill: themeColors.primary.strong,
    },
    secondary: {
      color: themeColors.secondary.strong,
      fill: themeColors.secondary.strong,
    },
    grayscale: {
      color: themeColors.grayscale.strong,
      fill: themeColors.grayscale.strong,
    },
    black: {
      color: themeColors.black,
      fill: themeColors.black,
    },
    white: {
      color: themeColors.white,
      fill: themeColors.white,
    },
  };

  return {
    "--icon-color": isIconColor(color) ? colors[color].color : color,
    "--icon-fill": isIconColor(color) ? colors[color].fill : color,
  };
};

export default useIconColorStyle;
