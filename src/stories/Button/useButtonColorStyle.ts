import { btnColor, btnVariant } from "./buttonTypes";
import { useTheme } from "../../../.storybook/ThemeContext";

interface ButtonColorProps {
  variant: btnVariant;
  color: btnColor;
  isSelected: Boolean;
}

const useButtonColorStyle = ({
  variant,
  color,
  isSelected,
}: ButtonColorProps) => {
  // 전체 테마 색상 불러오기
  const themeColors = useTheme();

  // 각 변수의 type 지정
  let bgColor: string = "";
  let textColor: string = "";
  let borderColor: string = "";

  // variant가 contained인 경우
  switch (variant) {
    case "contained":
      bgColor = themeColors[color].strong;
      textColor = themeColors.white;
      borderColor = themeColors[color].strong;
      break;
    case "text":
      bgColor = isSelected ? themeColors[color].moderate : "transparent";
      textColor = isSelected ? themeColors.white : themeColors[color].strong;
      borderColor = isSelected ? themeColors[color].moderate : "transparent";
      break;
  }

  return {
    "--btn-bg-color": bgColor,
    "--btn-text-color": textColor,
    "--btn-border-color": borderColor,
  };
};

export default useButtonColorStyle;
