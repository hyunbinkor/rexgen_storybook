import { useTheme } from "../../../.storybook/ThemeContext";
import { iconColor } from "./iconTypes";

interface IconColorProps {
  color: iconColor;
}

const useIconColorStyle = ({ color }: IconColorProps) => {
  // 전체 테마 색상 불러오기
  const themeColors = useTheme();

  let fillColor: string = "";

  if (color === "white" || color === "black") {
    fillColor = themeColors[color];
  } else {
    fillColor = themeColors[color].strong;
  }

  return {
    "--icon-color": fillColor,
    "--icon-fill": fillColor,
  };
};

export default useIconColorStyle;
