import React from "react";
import useIconPathStyle from "./useIconPathStyle";
import useIconColorStyle from "./useIconColorStyle";
import useIconSizeStyle from "./useIconSizeStyle";
import { iconColor, iconType, iconRole } from "./iconTypes";
import "./Icon.css"

/**
 * 아이콘 컴포넌트에 넘겨줄 props interface 지정
 */
export interface IconProps {
  /**
   * 아이콘의 형태 플래그
   */
  icon: iconType;
  /**
   * 아이콘의 역할 플래그
   */
  role?: iconRole;
  /**
   * 아이콘의 크기 플래그
   */
  size?: number;
  /**
   * 아이콘의 색상 플래그
   */
  color?: iconColor;
}

/**
 * svg 태그로 넘겨줄 style 객체 interface 지정
 */
interface IconCSSProperties extends React.CSSProperties {
  "--icon-color": string;
  "--icon-fill": string;
  "--icon-width": string;
  "--icon-height": string;
}

export const Icon = ({
  icon,
  role = "button",
  size = 1.6,
  color = "primary",
}: IconProps) => {
  
  const path = useIconPathStyle({icon});
  const colorStyle = useIconColorStyle({ color });
  const { viewBox, sizeStyle } = useIconSizeStyle({ size });

  const style: IconCSSProperties = { ...colorStyle, ...sizeStyle}

  return (
    <svg
      className="icon"
      role={role}
      viewBox={viewBox}
      style={style}
    >
      {path}
    </svg>
  )
};