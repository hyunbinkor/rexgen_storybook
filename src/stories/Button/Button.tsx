import { btnVariant, btnSize, btnColor } from "../../Types";
import React from "react";
import { ReactNode } from "react";
import useButtonColorStyle from "./useButtonColorStyle";
import useButtonSizeStyle from "./useButtonSizeStyle";

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
  /**
   * 현재는 내부 디자인 시스템이 없는 상황이기 때문에 간단한 구현에 초점을 두고
   * loading 혹은 disabled의 경우의 디자인을 별도로 두지 않고 opacity만을
   * CSS로 간단하게 조정하는 방식을 채택하였습니다.
   * 
   * 다만, 후에 이를 조정해야 할 필요성이 생긴다면 특수 상태 플래그를 CSS에 넘기는 대신
   * style 조정 hook에 편입시켜 고도화하는 방식을 택할 수 있겠습니다.
   */  

  // 기본 상태의 스타일 관련 hook 호출
  const colorStyle = useButtonColorStyle({variant, color, isSelected});
  const sizeStyle = useButtonSizeStyle({ fullWidth });

  // 특수 상태 플래그는 컴포넌트에 넘겨서 css 파일에서 적용
  return (
    <button
      className={className}
      onClick={onClick}
      onMouseOver={onMouseOver}
      data-is-selected={isSelected}
      data-is-loading={isLoading}
      data-is-disabled={isDisabled}
      disabled={isLoading || isDisabled}
      style={{...colorStyle, ...sizeStyle}}
    >
      {beforeIcon && <span className="icon-before">{beforeIcon}</span>}
      {/* {isLoading ? 로딩 아이콘 : */children}
      {afterIcon && <span className="icon-after">{afterIcon}</span>}
    </button>
  );
};
