import { btnColor, btnVariant } from "./buttonTypes";
import { useTheme } from "../../../.storybook/ThemeContext";

interface ButtonColorProps {
  variant: btnVariant;
  color: btnColor;
  isSelected: boolean;
}

const useButtonColorStyle = ({
  variant,
  color,
  isSelected,
}: ButtonColorProps) => {
  // 전체 테마 색상 불러오기
  const themeColors = useTheme();

  // colors 객체 생성
  const colors: Record<
    btnVariant,
    Record<btnColor, { bg: string; text: string; border: string }>
  > = {
    contained: {
      primary: {
        bg: themeColors.primary.strong,
        text: themeColors.white,
        border: themeColors.primary.strong,
      },
      secondary: {
        bg: themeColors.secondary.strong,
        text: themeColors.white,
        border: themeColors.secondary.strong,
      },
      success: {
        bg: themeColors.success.strong,
        text: themeColors.white,
        border: themeColors.success.strong,
      },
      warning: {
        bg: themeColors.warning.strong,
        text: themeColors.white,
        border: themeColors.warning.strong,
      },
      danger: {
        bg: themeColors.danger.strong,
        text: themeColors.white,
        border: themeColors.danger.strong,
      },
    },
    text: {
      primary: {
        bg: isSelected ? themeColors.primary.moderate : "transparent",
        text: isSelected ? themeColors.white : themeColors.primary.strong,
        border: isSelected ? themeColors.primary.moderate : "transparent",
      },
      secondary: {
        bg: isSelected ? themeColors.secondary.moderate : "transparent",
        text: themeColors.secondary.strong,
        border: isSelected ? themeColors.secondary.moderate : "transparent",
      },
      success: {
        bg: isSelected ? themeColors.success.moderate : "transparent",
        text: themeColors.success.strong,
        border: isSelected ? themeColors.success.moderate : "transparent",
      },
      warning: {
        bg: isSelected ? themeColors.warning.moderate : "transparent",
        text: themeColors.warning.strong,
        border: isSelected ? themeColors.warning.moderate : "transparent",
      },
      danger: {
        bg: isSelected ? themeColors.danger.moderate : "transparent",
        text: themeColors.danger.strong,
        border: isSelected ? themeColors.danger.moderate : "transparent",
      },
    },
  };

  return {
    "--btn-bg-color": colors[variant][color].bg,
    "--btn-text-color": colors[variant][color].text,
    "--btn-border-color": colors[variant][color].border,
  };
};

export default useButtonColorStyle;
