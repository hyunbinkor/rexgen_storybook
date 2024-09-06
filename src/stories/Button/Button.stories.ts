import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";
import { btnVariant, btnSize, btnColor } from "./buttonTypes";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/MuLoA3USWZiZLS2G7jy5eZ/%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=246-2847&t=K7SBRBWfM9FpXWoa-1",
    },
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

export const DefaultButton: Story = {
  args: {
    children: "Button",
  },
};

export const ButtonWithIcon: Story = {
  args: {
    children: "Dashboard",
    beforeIcon: "dashboard",
  },
};

export const LoadingButton: Story = {
  args: {
    children: "loading",
    isLoading: true,
  },
};

export const DisabledButton: Story = {
  args: {
    children: "disabled",
    isDisabled: true,
  },
};
