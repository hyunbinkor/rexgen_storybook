import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import { iconColor, iconType } from "./iconTypes";

const meta = {
  title: "Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/MuLoA3USWZiZLS2G7jy5eZ/%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=246-2572&t=5DO3LkCtumczYipb-1",
    },
  },
  tags: ["autodocs"],
  // storybook 화면에서 controls로 띄워줄 아이들
  argTypes: {
    icon: {
      options: iconType,
      control: { type: "inline-radio" },
    },
    size: {
      control: {
        type: "range",
        min: 1,
        max: 2,
        step: 0.1,
      },
    },
    color: {
      options: iconColor,
      control: { type: "inline-radio" },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: "person",
  },
};
