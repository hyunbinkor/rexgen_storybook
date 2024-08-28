import type { Preview } from "@storybook/react";
import { useEffect } from "react";
import { globalTypes } from "./globalTypes";
import Decorator from "./Decorator";

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
  decorators: [Decorator],
};

export default preview;
