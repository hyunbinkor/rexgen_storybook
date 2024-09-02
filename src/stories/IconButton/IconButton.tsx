import React from "react";

import { iconBtnColor, iconBtnSize, iconBtnVariant } from "./iconButtonType";
import useIconButtonColorStyle from "./useIconButtonColorStyle";
import useIconButtonSizeStyle from "./useIconButtonSizeStyle";
import "./IconButton.css";

import { iconType } from "../Icon/iconTypes";
import { Icon } from "../Icon/Icon";

/**
 * 아이콘버튼 컴포넌트에 넘겨줄 props interface 지정
 */
export interface IconButtonProps {
  /**
   * 아이콘버튼에 표시될 아이콘
   */
  icon: iconType;
  /**
   * ~한 용도를 위한 클래스명
   */
  className?: string;
  /**
   * 아이콘버튼 클릭 시 실행 될 함수
   */
  onClick?: () => void;
  /**
   * 아이콘버튼에 올려둘 시 보여질 툴팁 관련 함수
   */
  onMouseOver?: () => void;
  /**
   * 아이콘버튼(혹은 부모 요소)가 로딩 중인지에 대한 플래그
   */
  isLoading?: boolean;
  /**
   * 아이콘버튼이 비활성화 되어있는지에 대한 플래그
   */
  isDisabled?: boolean;
  /**
   * 아이콘버튼 형태 플래그, color/backgrounColor/border 변화
   */
  variant?: iconBtnVariant;
  /**
   * 아이콘버튼이 가지게 될 크기에 대한 플래그
   */
  size?: iconBtnSize;
  /**
   * 아이콘버튼 색상 플래그, color/backgroundColor/borderColor 변화
   */
  color?: iconBtnColor;
}

/**
 * button 태그로 넘겨줄 style 객체 interface 지정
 */
interface IconButtonCSSProperties extends React.CSSProperties {
  "--iconBtn-bg-color": string;
  "--iconBtn-icon-color": string;
  "--iconBtn-border-color": string;
  "--iconBtn-width": string;
  "--iconBtn-height": string;
  "--iconBtn-font-size": string;
}

/**
 * 아이콘버튼 컴포넌트
 */
export const IconButton = ({
  icon,
  className,
  onClick,
  onMouseOver,
  isLoading = false,
  isDisabled = false,
  variant = "contained",
  size ="medium",
  color = "primary",
}: IconButtonProps) => {
  /**
   * 현재는 내부 디자인 시스템이 없는 상황이기 때문에 간단한 구현에 초점을 두고
   * loading 혹은 disabled의 경우의 디자인을 별도로 두지 않고 opacity만을
   * CSS로 간단하게 조정하는 방식을 채택하였습니다.
   * 
   * 다만, 후에 이를 조정해야 할 필요성이 생긴다면 특수 상태 플래그를 CSS에 넘기는 대신
   * style 조정 hook에 편입시켜 고도화하는 방식을 택할 수 있겠습니다.
   */
  // 기본 상태의 스타일 관련 hook 호출
  const colorStyle = useIconButtonColorStyle({ variant, color });
  const sizeStyle = useIconButtonSizeStyle({ size });
  const style: IconButtonCSSProperties = { ...colorStyle, ...sizeStyle };

  // 특수 상태 플래그는 컴포넌트에 넘겨서 css 파일에서 적용
  return (
    <button
      className={[className, "iconBtn"].join(' ')}
      onClick={onClick}
      onMouseOver={onMouseOver}
      data-is-loading={isLoading}
      data-is-disabled={isDisabled}
      disabled={isLoading || isDisabled}
      style={style}
    >
      {isLoading
        ? <Icon icon="loading" color={colorStyle["--iconBtn-icon-color"]} />
        : <Icon icon={icon} color={colorStyle["--iconBtn-icon-color"]} />}
    </button>
  );
}