import type { Preview } from "@storybook/react";
import { globalTypes } from "./globalTypes";
import withThemeDecorator from "./withThemeDecorator";
import withMantineDecorator from "./withMantineDecorator";

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
  decorators: [withThemeDecorator, withMantineDecorator],
};

export default preview;
