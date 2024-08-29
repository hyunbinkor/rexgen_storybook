import type { Preview } from "@storybook/react";
import { useEffect } from "react";
import { globalTypes } from "./globalTypes";
import withThemeDecorator from "./withThemeDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        // color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes,
  decorators: [withThemeDecorator],
};

export default preview;
