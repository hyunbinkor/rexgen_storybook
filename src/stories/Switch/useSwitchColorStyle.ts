import { switchColor } from "./switchType";
import { useTheme } from "../../../.storybook/ThemeContext";

interface SwitchColorProps {
  color: switchColor;
}
const useSwitchColorStyle = ({ color }: SwitchColorProps) => {
  // 전체 테마 색상 불러오기
  const themeColors = useTheme();

  // colors 객체 생성
  const colors: Record<
    switchColor,
    { bg: string; bgChecked: string; slider: string }
  > = {
    primaryWhite: {
      bg: themeColors.grayscale.weak,
      bgChecked: themeColors.primary.strong,
      slider: themeColors.white,
    },
    secondaryWhite: {
      bg: themeColors.grayscale.weak,
      bgChecked: themeColors.secondary.strong,
      slider: themeColors.white,
    },
    primaryGray: {
      bg: themeColors.white,
      bgChecked: themeColors.primary.strong,
      slider: themeColors.grayscale.strong,
    },
    secondaryGray: {
      bg: themeColors.white,
      bgChecked: themeColors.secondary.strong,
      slider: themeColors.grayscale.strong,
    },
  };

  return {
    "--switch-bg-color": colors[color].bg,
    "--switch-bg-checked-color": colors[color].bgChecked,
    "--switch-slider-color": colors[color].slider,
  };
};

export default useSwitchColorStyle;
