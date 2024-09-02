import { useTheme } from "../../../.storybook/ThemeContext";
import { iconColor, isIconColor } from "./iconTypes";

interface IconColorProps {
  // 보완 : 정규식 타입 검사 string -> #000000
  color: iconColor | string;
}

const useIconColorStyle = ({ color }: IconColorProps) => {
  // 전체 테마 색상 불러오기
  const themeColors = useTheme();

  let fillColor: string = "";

  if (isIconColor(color)) {
    if (color === "white" || color === "black") {
      fillColor = themeColors[color];
    } else {
      fillColor = themeColors[color].strong;
    }
  } else fillColor = color;

  return {
    "--icon-color": fillColor,
    "--icon-fill": fillColor,
  };
};

export default useIconColorStyle;
