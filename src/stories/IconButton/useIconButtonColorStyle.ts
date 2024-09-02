import { iconBtnColor, iconBtnVariant } from "./iconButtonType";
import { useTheme } from "../../../.storybook/ThemeContext";

interface IconButtonColorProps {
  variant: iconBtnVariant;
  color: iconBtnColor;
}

const useIconButtonColorStyle = ({ variant, color }: IconButtonColorProps) => {
  // 전체 테마 색상 불러오기
  const themeColors = useTheme();

  // 각 변수의 type 지정
  let bgColor: string = "";
  let iconColor: string = "";
  let borderColor: string = "";

  // variant가 contained인 경우
  switch (variant) {
    case "contained":
      bgColor = themeColors[color].strong;
      iconColor = themeColors.white;
      borderColor = themeColors[color].strong;
      break;
    case "text":
      bgColor = "transparent";
      iconColor = themeColors[color].strong;
      borderColor = "transparent";
      break;
  }

  return {
    "--iconBtn-bg-color": bgColor,
    "--iconBtn-icon-color": iconColor,
    "--iconBtn-border-color": borderColor,
  };
};

export default useIconButtonColorStyle;
