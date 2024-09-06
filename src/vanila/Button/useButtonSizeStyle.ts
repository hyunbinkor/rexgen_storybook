import { btnSize } from "./buttonTypes";

interface ButtonSizeProps {
  fullWidth: boolean;
  size: btnSize;
}

const useButtonSizeStyle = ({ fullWidth, size }: ButtonSizeProps) => {
  /**
   * default로는 padding으로 width 결정, fullWidth의 경우 100%
   */
  const width: string = fullWidth ? "100%" : "auto";

  // sizes 객체 생성
  const sizes: Record<
    btnSize,
    {
      height: string;
      fontSize: string;
      padding: string;
      gap: string;
    }
  > = {
    small: {
      height: "2.4rem",
      fontSize: "1.6rem",
      padding: "0.6rem",
      gap: "0.4rem",
    },
    medium: {
      height: "3rem",
      fontSize: "2rem",
      padding: "0.75rem",
      gap: "0.5rem",
    },
    large: {
      height: "3.6rem",
      fontSize: "2.4rem",
      padding: "0.9rem",
      gap: "0.6rem",
    },
  };

  return {
    "--btn-width": width,
    "--btn-height": sizes[size].height,
    "--btn-font-size": sizes[size].fontSize,
    "--btn-padding-horizantal": sizes[size].padding,
    "--btn-gap-horizantal": sizes[size].gap,
  };
};

export default useButtonSizeStyle;
