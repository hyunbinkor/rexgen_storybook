import React from "react";
import '@mantine/core/styles.css'
import { Decorator } from "@storybook/react";
import { MantineProvider } from "@mantine/core";
import { theme } from "../src/theme";

const withMantineDecorator: Decorator = (Story, context) => {

  return (
    <MantineProvider theme={theme}>
      <Story />
    </MantineProvider>
  );
}

export default withMantineDecorator;