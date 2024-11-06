import tailwindColors from "tailwindcss/colors";

interface Colors {
  [key: string]: {
    [key: number]: string;
  };
}

const deleteColors = [
  "lightBlue",
  "warmGray",
  "trueGray",
  "coolGray",
  "blueGray",
];
deleteColors.forEach(
  (color) => delete tailwindColors[color as keyof typeof tailwindColors]
);
const colors: Colors = { ...tailwindColors };

interface ThemeConfig {
  prefix: string;
  tints: [number, number];
}

interface ColorValue {
  [key: number]: string;
}

interface Themes {
  [key: string]: { primary?: string; secondary?: string };
}

const lightThemeConfigs: ThemeConfig[] = [
  { prefix: "light", tints: [400, 500] },
  { prefix: "base", tints: [500, 600] },
  { prefix: "dark", tints: [600, 700] },
  { prefix: "darker", tints: [700, 800] },
  { prefix: "darkest", tints: [800, 900] },
];

const darkThemeConfigs: ThemeConfig[] = [
  { prefix: "-lightest", tints: [200, 100] },
  { prefix: "-lighter", tints: [300, 200] },
  { prefix: "-light", tints: [400, 300] },
  { prefix: "-base", tints: [500, 400] },
  { prefix: "-dark", tints: [600, 500] },
];

const generateThemes = (
  colors: { [key: string]: ColorValue },
  themeConfigs: ThemeConfig[]
): Themes => {
  const themes: Themes = {};

  for (const { prefix, tints } of themeConfigs) {
    Object.entries(colors).forEach(([colorName, colorValue]) => {
      if (excludedColors.includes(colorName)) {
        return;
      }
      const [primaryShade, secondaryShade] = tints;
      const themeName = `${prefix}-${colorName}`;
      themes[themeName] = {
        primary: colorValue[primaryShade],
        secondary: colorValue[secondaryShade],
      };
    });
  }

  return themes;
};

const excludedColors = ["zinc", "slate", "stone", "neutral", "gray"];

function filterThemes(themes: Themes) {
  return Object.fromEntries(
    Object.entries(themes).filter(([, themeColors]) => {
      return (
        themeColors.primary !== undefined && themeColors.secondary !== undefined
      );
    })
  );
}

const lightThemes = filterThemes(generateThemes(colors, lightThemeConfigs));
const darkThemes = filterThemes(generateThemes(colors, darkThemeConfigs));

export { lightThemes, darkThemes };
