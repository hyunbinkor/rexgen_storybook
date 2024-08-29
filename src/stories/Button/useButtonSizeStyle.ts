interface ButtonSizeProps {
  fullWidth: Boolean;
}

const useButtonSizeStyle = ({ fullWidth }: ButtonSizeProps) => {
  // default 상황에 대한 크기 지정 (padding 값을 반영하여 auto로 설정)
  let width: string = "auto";

  // fullWidth인 경우 주어진 공간을 채우도록
  if (fullWidth) width = "100%";

  return {
    "--btn-width": width,
  };
};

export default useButtonSizeStyle;
