import { btnVariant, btnSize, btnColor } from "../../Types";
import React from "react";
import { ReactNode } from "react";

export interface ButtonProps {
  /**
   * 텍스트 혹은 링크 등으로 버튼에 표시될 자식 요소
   */
  children: ReactNode;
  /**
   * ~한 용도를 위한 클래스명
   */
  className?: string;
  /**
   * 버튼 클릭 시 실행 될 함수
   */
  onClick?: () => void;
  /**
   * 버튼에 올려둘 시 보여질 툴팁 관련 함수
   */
  onMouseOver?: () => void;
  /**
   * 여러 버튼 중 하나만 선택 가능할 시에 선택된 요소인지 플래그 (for Style)
   */
  isSelected?: boolean;
  /**
   * 버튼(혹은 부모 요소)가 로딩 중인지에 대한 플래그
   */
  isLoading?: boolean;
  /**
   * 버튼이 비활성화 되어있는지에 대한 플래그
   */
  isDisabled?: boolean;
  /**
   * 버튼 형태 플래그, color/backgrounColor/border 변화
   */
  variant?: btnVariant;
  /**
   * 버튼이 가지게 될 크기에 대한 플래그
   */
  size?: btnSize;
  /**
   * 버튼 색상 플래그, color/backgroundColor/borderColor 변화
   */
  color?: btnColor;
  /**
   * 버튼이 전체 너비를 차지하는지에 대한 플래그, width 100%
   */
  fullWidth?: boolean
  /**
   * 텍스트 앞쪽으로 자리할 아이콘 요소
   */
  beforeIcon?: ReactNode;
  /**
   * 텍스트 뒤쪽으로 자리할 아이콘 요소
   */
  afterIcon?: ReactNode;
  /**
   * 색상과 크기 요소의 모체가 될 스타일시트 -> 적용 방식 결정 필요
   */
  // styleSheet?: 
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  children,
  className,
  onClick,
  onMouseOver,
  isSelected = false,
  isLoading = false,
  isDisabled = false,
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  fullWidth = false,
  beforeIcon,
  afterIcon,
}: ButtonProps) => {

  // classlist로 css와 접점 형성
  const classList = [
    className,
    `btn-${variant}`,
    `btn-${size}`,
    `btn-${color}`,
    `${fullWidth ? 'btn-fullwidth' : undefined}`
  ];

  return (
    <button
      className={classList.join(' ')}
      onClick={onClick}
      onMouseOver={onMouseOver}
      data-is-selected={isSelected}
      data-is-loading={isLoading}
      data-is-disabled={isDisabled}
      disabled={isLoading || isDisabled}
    >
      {beforeIcon && <span className="icon-before">{beforeIcon}</span>}
      {children}
      {afterIcon && <span className="icon-after">{afterIcon}</span>}
    </button>
  );
};
