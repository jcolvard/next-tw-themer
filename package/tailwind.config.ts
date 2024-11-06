import type { Config } from "tailwindcss";
import { darkThemes, lightThemes } from "./colorThemes";
import { createThemes } from "tw-colors";
import colors from "tailwindcss/colors";
import mergeWith from "lodash.mergewith";

const baseConfig: Config = {
  darkMode: "selector",
  content: ["./node_modules/npm-github-starter/**/*.{js,ts,jsx,tsx}"],
  theme: {
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

const customizer = (objValue: any, srcValue: any): any => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
};

const twConfig = (customConfig: Partial<Config> = {}): Config => {
  return mergeWith({}, baseConfig, customConfig, customizer) as Config;
};

export default twConfig;
