import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { IconButton } from "./IconButton";
import { iconBtnVariant, iconBtnSize, iconBtnColor } from "./iconButtonType";

const meta = {
  title: "IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/MuLoA3USWZiZLS2G7jy5eZ/%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=251-2060&t=5DO3LkCtumczYipb-1",
    },
  },
  tags: ["autodocs"],
  // storybook 화면에서 controls로 띄워줄 아이들
  argTypes: {
    isLoading: Boolean,
    isDisabled: Boolean,
    variant: {
      options: iconBtnVariant,
      control: { type: "inline-radio" },
    },
    size: {
      options: iconBtnSize,
      control: { type: "inline-radio" },
    },
    color: {
      options: iconBtnColor,
      control: { type: "inline-radio" },
    },
  },
  // 더미 함수로 대체한 액션
  args: {
    onClick: fn(),
    onMouseOver: fn(),
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    icon: "person",
  },
};
