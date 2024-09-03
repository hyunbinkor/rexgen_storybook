import { iconBtnColor, iconBtnVariant } from "./iconButtonType";
import { useTheme } from "../../../.storybook/ThemeContext";

interface IconButtonColorProps {
  variant: iconBtnVariant;
  color: iconBtnColor;
}

const useIconButtonColorStyle = ({ variant, color }: IconButtonColorProps) => {
  // 전체 테마 색상 불러오기
  const themeColors = useTheme();

  // colors 객체 생성
  const colors: Record<
    iconBtnVariant,
    Record<iconBtnColor, { bg: string; icon: string; border: string }>
  > = {
    contained: {
      primary: {
        bg: themeColors.primary.strong,
        icon: themeColors.white,
        border: themeColors.primary.strong,
      },
      secondary: {
        bg: themeColors.secondary.strong,
        icon: themeColors.white,
        border: themeColors.secondary.strong,
      },
      success: {
        bg: themeColors.success.strong,
        icon: themeColors.white,
        border: themeColors.success.strong,
      },
      warning: {
        bg: themeColors.warning.strong,
        icon: themeColors.white,
        border: themeColors.warning.strong,
      },
      danger: {
        bg: themeColors.danger.strong,
        icon: themeColors.white,
        border: themeColors.danger.strong,
      },
    },
    text: {
      primary: {
        bg: "transparent",
        icon: themeColors.primary.strong,
        border: "transparent",
      },
      secondary: {
        bg: "transparent",
        icon: themeColors.secondary.strong,
        border: "transparent",
      },
      success: {
        bg: "transparent",
        icon: themeColors.success.strong,
        border: "transparent",
      },
      warning: {
        bg: "transparent",
        icon: themeColors.warning.strong,
        border: "transparent",
      },
      danger: {
        bg: "transparent",
        icon: themeColors.danger.strong,
        border: "transparent",
      },
    },
  };

  return {
    "--iconBtn-bg-color": colors[variant][color].bg,
    "--iconBtn-icon-color": colors[variant][color].icon,
    "--iconBtn-border-color": colors[variant][color].border,
  };
};

export default useIconButtonColorStyle;
