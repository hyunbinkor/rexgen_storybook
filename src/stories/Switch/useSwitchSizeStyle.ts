import { switchSize } from "./switchType";

interface SizeStyleProps {
  size: switchSize;
}

const useSwitchSizeStyle = ({ size }: SizeStyleProps) => {
  //sizes 객체 생성
  const sizes: Record<
    switchSize,
    {
      width: string;
      height: string;
      borderRadius: string;
      slider: string;
      seperation: string;
      translate: string;
    }
  > = {
    small: {
      width: "2.4rem",
      height: "1.6rem",
      borderRadius: "0.8rem",
      slider: "1.2rem",
      seperation: "0.2rem",
      translate: "0.8rem",
    },
    medium: {
      width: "3rem",
      height: "2rem",
      borderRadius: "1rem",
      slider: "1.5rem",
      seperation: "0.25rem",
      translate: "1rem",
    },
    large: {
      width: "3.6rem",
      height: "2.4rem",
      borderRadius: "1.2rem",
      slider: "1.8rem",
      seperation: "0.3rem",
      translate: "1.2rem",
    },
  };

  return {
    "--switch-width": sizes[size].width,
    "--switch-height": sizes[size].height,
    "--switch-border-radius": sizes[size].borderRadius,
    "--switch-slider-size": sizes[size].slider,
    "--switch-slider-seperation": sizes[size].seperation,
    "--switch-translate-distance": sizes[size].translate,
  };
};

export default useSwitchSizeStyle;
