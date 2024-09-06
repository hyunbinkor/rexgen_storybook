import React, { ReactNode, useState } from "react";
import { switchSize, switchColor } from "./switchType";
import useSwitchColorStyle from "./useSwitchColorStyle";
import useSwitchSizeStyle from "./useSwitchSizeStyle";
import "./Switch.css";

/**
 * 스위치 컴포넌트에 넘겨줄 props interface 지정
 */
export interface SwitchProps {
  /**
   * 스위치가 다루고 있는 대상을 나타내는 요소
   */
  label: ReactNode;
  /**
   * 스위치 값의 변경으로 호출되는 콜백 함수 (현재 상태를 인수로 가짐)
   */
  onChange: (
    isChecked: boolean
  ) => void;
  /**
   * 스위치의 값이 켜져있는지에 대한 플래그
   */
  isChecked?: boolean;
  /**
   * 스위치(혹은 부모 요소)가 로딩 중인지에 대한 플래그
   */
  isLoading?: boolean;
  /**
   * 스위치가 비활성화 되어있는지에 대한 플래그
   */
  isDisabled?: boolean;
  /**
   * 스위치의 사이즈에 대한 플래그
   */
  size?: switchSize;
  /**
   * 스위치의 색상에 대한 플래그
   */
  color?: switchColor;
}

/**
 * div 태그로 넘겨줄 style 객체 interface 지정 (컨테이너 전체에 변수 지정)
 */
interface SwitchCSSProperties extends React.CSSProperties {
  "--switch-bg-color": string;
  "--switch-bg-checked-color": string;
  "--switch-border-radius": string;
  "--switch-slider-color": string;
  "--switch-width": string;
  "--switch-height": string;
  "--switch-slider-size": string;
  "--switch-slider-seperation": string;
  "--switch-translate-distance": string;
}

/**
 * 스위치 컴포넌트
 */
export const Switch = ({
  label,
  onChange,
  isChecked = false,
  isLoading = false,
  isDisabled = false,
  size = "medium",
  color = "primaryWhite",
}: SwitchProps) => {
  // switch의 상태 지정
  const [checked, setChecked] = useState(isChecked);

  // switch의 handleChange
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isDisabled) return;
    setChecked(e.target.checked);
    onChange?.(e.target.checked);
  };

  // 스타일 관련 hook 호출
  const colorStyle = useSwitchColorStyle({ color });
  const sizeStyle = useSwitchSizeStyle({ size });
  const style: SwitchCSSProperties = { ...colorStyle, ...sizeStyle };

  // 특수 상태 플래그는 css 파일에서 적용
  return (
    <div className="switch-container" style={style}>
      {label}
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={handleChange} disabled={isLoading || isDisabled} />
        <span className="switch-slider"/>
      </label>
    </div>
  )
};