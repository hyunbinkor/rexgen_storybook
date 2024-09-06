// src/stories/Button.stories.js
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from '@mantine/core';

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
    fullWidth: Boolean,
    disabled: Boolean,
    loading: Boolean,
    variant: {
      options: ["gradient" , "filled" , "light" , "outline" , "transparent" , "white" , "subtle" , "default"],
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
    children: 'Primary Button',
  };
};
