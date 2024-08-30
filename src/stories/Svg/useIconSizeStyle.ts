interface IconSizeProps {
  size: number;
}

const useIconSizeStyle = ({ size }: IconSizeProps) => {
  /**
   * rem으로 나타내는 viewbox와 size
   */
  const viewBox = `0 0 ${size} ${size}`;
  const sizeStyle = {
    "--icon-width": `${size}rem`,
    "--icon-height": `${size}rem`,
  };

  return {
    viewBox,
    sizeStyle,
  };
};

export default useIconSizeStyle;
