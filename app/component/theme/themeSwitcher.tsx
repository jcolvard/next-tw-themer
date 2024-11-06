"use client";

import React, { useEffect } from "react";
import { lightThemes, darkThemes } from "../../../package/colorThemes";

interface ThemeSwitcherProps {
  randomTheme: string | null;
  setRandomTheme: React.Dispatch<React.SetStateAction<string | null>>;
  userTheme: string | null;
  setUserTheme: React.Dispatch<React.SetStateAction<string | null>>;
  formatThemeTitle: (themeTitle: string) => string;
  mode?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  randomTheme,
  setRandomTheme,
  userTheme,
  setUserTheme,
  mode,
  formatThemeTitle,
}) => {
  const lightThemeKeys = Object.keys(lightThemes);
  const darkThemeKeys = Object.keys(darkThemes);

  useEffect(() => {
    if (!mode) return;

    const handleCurrentTheme = (userTheme: string, newTheme: string) => {
      document.body.classList.remove(userTheme);
      document.body.classList.add(newTheme);
      setUserTheme(newTheme);
      localStorage.colorTheme = newTheme;
    };

    const handleRandomTheme = (randomTheme: string, newTheme: string) => {
      document.body.classList.remove(randomTheme);
      document.body.classList.add(newTheme);
      setRandomTheme(newTheme);
    };

    const removePrefix = (theme: string) =>
      theme.startsWith("-") ? theme.slice(1) : theme;
    const addPrefix = (theme: string) =>
      theme.startsWith("-") ? theme : "-" + theme;

    const processTheme = (theme: string, isLightMode: boolean) => {
      let modifiedTheme = isLightMode ? removePrefix(theme) : addPrefix(theme);
      const regex = isLightMode ? /lightest|lighter/ : /-darkest|-darker/;
      const replacement = isLightMode ? "light" : "-dark";
      modifiedTheme = modifiedTheme.replace(regex, replacement);

      return modifiedTheme;
    };

    if (mode === "light") {
      if (userTheme && userTheme.startsWith("-")) {
        const newTheme = processTheme(userTheme, true);
        handleCurrentTheme(userTheme, newTheme);
      } else if (!userTheme && randomTheme && randomTheme.startsWith("-")) {
        const newTheme = processTheme(randomTheme, true);
        handleRandomTheme(randomTheme, newTheme);
      }
    } else if (mode === "dark") {
      if (userTheme && !userTheme.startsWith("-")) {
        const newTheme = processTheme(userTheme, false);
        handleCurrentTheme(userTheme, newTheme);
      } else if (!userTheme && randomTheme && !randomTheme.startsWith("-")) {
        const newTheme = processTheme(randomTheme, false);
        handleRandomTheme(randomTheme, newTheme);
      }
    }
  }, [mode, randomTheme, setRandomTheme, userTheme, setUserTheme]);

  const handleThemeClick = (newTheme: string) => {
    if (randomTheme && document.body.classList.contains(randomTheme)) {
      document.body.classList.remove(randomTheme);
    }
    if (userTheme) {
      document.body.classList.remove(userTheme);
    }
    document.body.classList.add(newTheme);
    setUserTheme(newTheme);
    localStorage.colorTheme = newTheme;
  };

  const currentModeKeys = mode === "dark" ? darkThemeKeys : lightThemeKeys;

  return (
    <div className="grid grid-flow-col grid-rows-17 place-items-center gap-1 md:grid-flow-row md:grid-cols-17 md:grid-rows-5">
      {currentModeKeys.map((themeName, index) => (
        <button
          key={index}
          className={`block flex h-6 w-10 items-center justify-center rounded border border-white md:h-4 md:w-4 dark:border-gray-900 ${themeName} bg-primary outline-none hover:bg-secondary focus:shadow-focusSwatchButton focus:shadow-primary ${
            themeName === userTheme
              ? "shadow-smFocusSwatchButton shadow-primary md:shadow-focusSwatchButton"
              : ""
          }`}
          title={formatThemeTitle(themeName)}
          onClick={() => {
            handleThemeClick(themeName);
          }}
        >
          {themeName === userTheme ||
          (themeName === randomTheme && !userTheme) ? (
            <div className="h-3 w-3 rounded rounded-full bg-white md:h-[6px] md:w-[6px] dark:bg-gray-900"></div>
          ) : null}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
