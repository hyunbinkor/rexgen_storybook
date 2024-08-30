import React from "react";
import { iconType } from "./iconTypes";
import pathlibrary from "./pathlibrary";

interface IconPathProps {
  icon: iconType;
}

const useIconPathStyle = ({ icon }: IconPathProps) => {
  const iconPath: React.SVGProps<SVGPathElement> = pathlibrary[icon];

  return (
    <path {...iconPath} />
  );
};

export default useIconPathStyle;
