import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Switch } from "./Switch";
import { switchColor, switchSize } from "./switchType";

const meta = {
  title: "Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // storybook 화면에서 controls로 띄워줄 아이들
  argTypes: {
    isChecked: Boolean,
    isLoading: Boolean,
    isDisabled: Boolean,
    size: {
      options: switchSize,
      control: { type: "inline-radio" },
    },
    color: {
      options: switchColor,
      control: { type: "inline-radio" },
    },
  },
  // 더미 함수로 대체한 액션
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryWhite: Story = {
  args: {
    label: "스위치",
    color: "primaryWhite",
  },
};
