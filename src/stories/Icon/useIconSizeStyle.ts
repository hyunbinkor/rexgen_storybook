interface IconSizeProps {
  size: number | string;
}

const useIconSizeStyle = ({ size }: IconSizeProps) => {
  /**
   * rem으로 나타내는 size
   */
  const sizeStyle = {
    "--icon-width": typeof size === "number" ? `${size}rem` : size,
    "--icon-height": typeof size === "number" ? `${size}rem` : size,
  };
  return sizeStyle;
};

export default useIconSizeStyle;
