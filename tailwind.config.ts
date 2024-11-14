import type { Config } from "tailwindcss";
import { darkThemes, lightThemes } from "./package/colorThemes";
import { createThemes } from "tw-colors";
import colors from "tailwindcss/colors";

const modeThemeDropdownConfig: Config = {
  darkMode: "selector",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./package/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    extend: {
      boxShadow: {
        focus: "0 0 7px 4px var(--tw-shadow-color)",
        focusSwatchButton: "0 0 0 1px var(--tw-shadow-color)",
        smFocusSwatchButton: "0 0 0 2px var(--tw-shadow-color)",
        darkLinkFocus: `0 0 0 2px ${colors.gray[800]}, 0 0 7px 5px hsl(var(--twc-primary))`,
        lightLinkFocus: `0 0 0 2px ${colors.white}, 0 0 7px 6px hsl(var(--twc-primary))`,
        panel: "0 0 18px -1px var(--tw-ring-color)",
      },
      gridTemplateColumns: {
        17: "repeat(17, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        17: "repeat(17, minmax(0, 1fr))",
      },
    },
  },
  plugins: [createThemes(darkThemes), createThemes(lightThemes)],
};

export default modeThemeDropdownConfig;
