import { Styles } from "../stories/styles.css";
import { madeStyles } from "../stories/assets/css/made-css-variables.css";
import { madeFonts } from "../stories/assets/fonts/mark-for-mc.css";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addParameters } from "@storybook/client-api";
import { BADGE } from "@geometricpanda/storybook-addon-badges";

const SOURCE_REGEX = /^\(\) => `(.*)`$/;

addParameters({
  badgesConfig: {
    [BADGE.BETA]: {
      contrast: "WHITE",
      color: "#282828",
      title: "BETA",
    },
    [BADGE.OBSOLETE]: {
      contrast: "WHITE",
      color: "#282828",
      title: "RESPONSIVE",
    },
  },
});

export const parameters = {
  actions: { disable: true },
  backgrounds: { disable: true },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  viewMode: "docs",
  options: {
    storySort: {
      order: [
        "Hello",
        ["Introduction", "Overview", "Getting Started", "What's New", "Changelog", "Contribute", "Roadmap", "Naming Conventions"],
        "Design Tokens",
        ["Overview", "Theming", "Color", "Typography", "Space", "Border Radius", "Shadow"],
        "Foundations",
        [ "Icons", "Fonts", "Typography",, "Grid", "Branding"],
        "Actions",
        ["Button"],
        "Forms",
        [
          "Text Input",
          "Text Area",
          "Select",
          "Radio Button",
          "Checkbox",
          "Toggle",        
        ],
        "Navigation",
        "Content & Data Display",
        "Feedback",
        "Popover",
        "Utility Classes", ["Overview"]
      ],
    },
  },
  docs: {
    transformSource: (src, storyContext) => {
      const match = SOURCE_REGEX.exec(src);
      return match ? match[1] : src;
    },
  },
};
