import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { IconButton } from "./IconButton";
import { iconBtnVariant, iconBtnSize, iconBtnColor } from "./iconButtonType";
import { Icon } from "../Icon/Icon";

const meta = {
  title: "IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
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
