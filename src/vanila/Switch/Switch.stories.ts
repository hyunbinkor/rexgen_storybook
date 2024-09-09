import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Switch } from "./Switch";
import { switchColor, switchSize } from "./switchType";

const meta = {
  title: "Vainila/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/MuLoA3USWZiZLS2G7jy5eZ/%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=251-2059&t=5DO3LkCtumczYipb-1",
    },
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
