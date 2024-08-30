import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";
import { btnVariant, btnSize, btnColor } from "./buttonTypes";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // storybook 화면에서 controls로 띄워줄 아이들
  argTypes: {
    isSelected: Boolean,
    isLoading: Boolean,
    isDisabled: Boolean,
    variant: {
      options: btnVariant,
      control: { type: "inline-radio" },
    },
    size: {
      options: btnSize,
      control: { type: "inline-radio" },
    },
    color: {
      options: btnColor,
      control: { type: "inline-radio" },
    },
  },
  // 더미 함수로 대체한 액션
  args: {
    onClick: fn(),
    onMouseOver: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};
