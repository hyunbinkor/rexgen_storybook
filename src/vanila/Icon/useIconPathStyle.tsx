import React from "react";
import { iconType } from "./iconTypes";
import pathLibrary from "./pathLibrary";

interface IconPathProps {
  icon: iconType;
}

const useIconPathStyle = ({ icon }: IconPathProps) => {
  // 보완 : viewBox 타입 검사 만들기 (w.정규식)
  const iconViewBox: string = pathLibrary[icon].viewBox;
  const iconPath: React.SVGProps<SVGPathElement> = pathLibrary[icon].path;

  return {
    viewBox: iconViewBox,
    path: iconPath,
  };
};

export default useIconPathStyle;
