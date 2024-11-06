import { SetStateAction, Dispatch, FC } from "react";
import ModeSwitcher from "./mode/modeSwitcher";
import ThemeSwitcher from "./theme/themeSwitcher";
import ModeSectionHeader from "./mode/modeSectionHeader";
import ThemeSectionHeader from "./theme/themeSectionHeader";

interface DropdownMenuProps {
  mode: string | undefined;
  randomTheme: string | null;
  setRandomTheme: Dispatch<SetStateAction<string | null>>;
  userTheme: string | null;
  setUserTheme: Dispatch<SetStateAction<string | null>>;
  formatThemeTitle: (themeTitle: string) => string;
  applyRandomTheme: () => void;
  setOpenDropdown: Dispatch<SetStateAction<boolean>>;
  explicitMode: string | undefined;
}

const DropdownMenu: FC<DropdownMenuProps> = ({
  mode,
  randomTheme,
  setRandomTheme,
  userTheme,
  setUserTheme,
  formatThemeTitle,
  applyRandomTheme,
  setOpenDropdown,
  explicitMode,
}) => {
  return (
    <>
      <ModeSectionHeader
        mode={mode}
        explicitMode={explicitMode}
        setOpenDropdown={setOpenDropdown}
      />
      <ModeSwitcher />
      <ThemeSectionHeader
        randomTheme={randomTheme}
        userTheme={userTheme}
        formatThemeTitle={formatThemeTitle}
        applyRandomTheme={applyRandomTheme}
      />
      <ThemeSwitcher
        randomTheme={randomTheme}
        setRandomTheme={setRandomTheme}
        userTheme={userTheme}
        setUserTheme={setUserTheme}
        mode={mode}
        formatThemeTitle={formatThemeTitle}
      />
    </>
  );
};

export default DropdownMenu;
