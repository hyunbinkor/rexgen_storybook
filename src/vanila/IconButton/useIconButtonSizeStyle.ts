import { iconBtnSize } from "./iconButtonType";

interface ButtonSizeProps {
  size: iconBtnSize;
}

const useIconButtonSizeStyle = ({ size }: ButtonSizeProps) => {
  // sizes 객체 생성
  const sizes: Record<
    iconBtnSize,
    {
      width: string;
      height: string;
      fontSize: string;
    }
  > = {
    small: {
      width: "2.4rem",
      height: "2.4rem",
      fontSize: "1.6rem",
    },
    medium: {
      width: "3rem",
      height: "3rem",
      fontSize: "2rem",
    },
    large: {
      width: "3.6rem",
      height: "3.6rem",
      fontSize: "2.4rem",
    },
  };

  return {
    "--iconBtn-width": sizes[size].width,
    "--iconBtn-height": sizes[size].height,
    "--iconBtn-font-size": sizes[size].fontSize,
  };
};

export default useIconButtonSizeStyle;
