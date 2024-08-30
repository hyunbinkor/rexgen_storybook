import { btnSize } from "./buttonTypes";

interface ButtonSizeProps {
  fullWidth: Boolean;
  size: btnSize;
}

const useButtonSizeStyle = ({ fullWidth, size }: ButtonSizeProps) => {
  /**
   * default로는 padding으로 width 결정, fullWidth의 경우 100%
   */
  const width: string = fullWidth ? "100%" : "auto";

  /**
   * rem으로 나타내는 파트별 사이즈
   */
  // size로 매개변수 설정해서 각 부분 길이 설정
  const parameter = size === "small" ? 0.8 : size === "medium" ? 1 : 1.2;

  const height: string = `${parameter * 3}rem`;
  const fontSize: string = `${parameter * 2}rem`;
  const paddingHorizantal: string = `${parameter * 0.75}rem`;
  const paddingVertical: string = `${parameter * 0.5}rem`;

  return {
    "--btn-width": width,
    "--btn-height": height,
    "--btn-font-size": fontSize,
    "--btn-padding-horizantal": paddingHorizantal,
    "--btn-padding-vertical": paddingVertical,
  };
};

export default useButtonSizeStyle;
