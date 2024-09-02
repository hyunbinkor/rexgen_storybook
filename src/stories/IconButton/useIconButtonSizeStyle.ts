import { iconBtnSize } from "./iconButtonType";

interface ButtonSizeProps {
  size: iconBtnSize;
}

const useIconButtonSizeStyle = ({ size }: ButtonSizeProps) => {
  /**
   * rem으로 나타내는 파트별 사이즈
   */
  // size로 매개변수 설정해서 각 부분 길이 설정
  const parameter = size === "small" ? 0.8 : size === "medium" ? 1 : 1.2;

  const width: string = `${parameter * 3}rem`;
  const height: string = `${parameter * 3}rem`;
  const fontSize: string = `${parameter * 2}rem`;

  return {
    "--iconBtn-width": width,
    "--iconBtn-height": height,
    "--iconBtn-font-size": fontSize,
  };
};

export default useIconButtonSizeStyle;
