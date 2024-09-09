// src/stories/Button.stories.js
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@mantine/core";
import { fn } from "@storybook/test";

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

    variant: {
      options: ['filled' , 'light' , 'outline' , 'transparent' , 'white' , 'subtle' , 'default' , 'gradient'],
      control: { type: "select" },
    },
    size: {
      options: ['xs' , 'sm' , 'md' , 'lg' , 'xl', 'compact-xs' , 'compact-sm' , 'compact-md' , 'compact-lg' , 'compact-xl'],
      control: { type: "select" },
    },
    color: {
      options: ['dark' , 'gray' , 'red' , 'pink' , 'grape' , 'violet' , 'indigo' , 'blue' , 'cyan' , 'green' , 'lime' , 'yellow' , 'orange' , 'teal'],
      control: { type: "select" },
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    autoContrast :{
      control: 'boolean',
  },
    radius: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type : "select", },
    },
    gradient: {control: {type: "object"}},
    justify: {
      options: ["-moz-initial" , "inherit" , "initial" , "revert" , "revert-layer" , "unset" , "space-around" , "space-between" , "space-evenly" , "stretch" , "center" , "end" , "flex-end" , "flex-start" , "start" , "left" , "normal" , "right"],
      control: { type : "select", },
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
  },
};
