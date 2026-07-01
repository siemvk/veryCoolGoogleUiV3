import type { Preview } from "@storybook/react";
import "beercss";
import "material-dynamic-colors";
import "../src/theme.css"
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // Adds a toggle switch to the Storybook toolbar
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
  // Applies the theme to the HTML element wrapping your component
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "light";
      document.documentElement.setAttribute("data-theme", theme);
      return Story();
    },
  ],
};

export default preview;