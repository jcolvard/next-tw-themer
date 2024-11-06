"use client";

import React, { useEffect, useState } from "react";
import Dropdown from "../app/component/dropdown";
import DropdownTrigger from "../app/component/dropdownTrigger";
import DropdownTriggerLoading from "../app/component/dropdownTriggerLoading";
import DropdownMenu from "../app/component/dropdownMenu";
import { lightThemes, darkThemes } from "./colorThemes";
import { useTheme } from "next-themes";
import "../app/styles.css";

interface NextTailwindThemerProps {
  widthClass?: string;
  position?: "to-left" | "to-right";
}

const NextTailwindThemer: React.FC<NextTailwindThemerProps> = ({
  widthClass,
  position,
}) => {
  const { resolvedTheme: mode, theme: explicitMode } = useTheme();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [randomTheme, setRandomTheme] = useState<string | null>(null);
  const [userTheme, setUserTheme] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("colorTheme");
    if (storedTheme) {
      document.body.classList.add(storedTheme);
      setUserTheme(storedTheme);
    } else {
      applyRandomTheme();
    }
    return () => {
      const allThemes = [
        ...Object.keys(darkThemes),
        ...Object.keys(lightThemes),
      ];
      allThemes.forEach((theme) => document.body.classList.remove(theme));
    };
  }, []);

  const applyRandomTheme = () => {
    const themes = mode === "dark" ? darkThemes : lightThemes;
    const themeKeys = Object.keys(themes);
    const randomIndex = Math.floor(Math.random() * themeKeys.length);
    const newRandomTheme = themeKeys[randomIndex] ?? null;
    setUserTheme("");
    setRandomTheme(newRandomTheme);
    if (newRandomTheme) {
      document.body.classList.add(newRandomTheme);
    }
  };

  const formatThemeTitle = (themeTitle: string): string => {
    return themeTitle.startsWith("-")
      ? themeTitle.substring(1)
      : themeTitle
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
  };

  if (!mounted) {
    return <DropdownTriggerLoading />;
  }

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <Dropdown
      widthClass={widthClass || "w-[300px] md:w-[340px]"}
      trigger={<DropdownTrigger mode={mode} onClick={toggleDropdown} />}
      menu={
        <DropdownMenu
          mode={mode}
          explicitMode={explicitMode}
          randomTheme={randomTheme}
          setRandomTheme={setRandomTheme}
          applyRandomTheme={applyRandomTheme}
          userTheme={userTheme}
          setUserTheme={setUserTheme}
          formatThemeTitle={formatThemeTitle}
          setOpenDropdown={setOpenDropdown}
        />
      }
      openDropdown={openDropdown}
      setOpenDropdown={setOpenDropdown}
      position={position}
    />
  );
};

export default NextTailwindThemer;
export { lightThemes, darkThemes };
