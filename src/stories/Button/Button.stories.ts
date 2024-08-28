import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";
import { btnVariant, btnSize, btnColor } from "../../Types";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isSelected: Boolean,
    isLoading: Boolean,
    isDisabled: Boolean,
    variant: btnVariant,
    size: btnSize,
    color: btnColor,
  },
  // 더미 함수로 대체한 액션
  args: {
    onClick: fn(),
    onMouseOver: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Button",
  },
};
