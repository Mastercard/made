// .storybook/YourTheme.js

import { create } from "@storybook/theming";
import logo from "../stories/assets/images/Made_CSS_Beta_logo.svg";

export default create({
  // colorPrimary: "#ffffff",
  colorSecondary: "#cf4500",

  // Typography
  fontBase: '"MarkOffcForMC", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "white",

  //   barBg: '#141413',
  // appContentBg: 'white',

  // Toolbar default and active colors
  // barTextColor: 'white',
  barSelectedColor: "white",
  barBg: "#141413",

  base: "dark",
  brandTitle: "Made storybook",
  brandImage:
    "https://cdn.jsdelivr.net/gh/mastercard/made@main/storybook/stories/assets/images/Made_CSS_logo.svg",
});
