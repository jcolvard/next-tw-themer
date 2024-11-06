import { useTheme } from "next-themes";

import {
  MoonIcon,
  SunIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";

const ModeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleMenuClick = (theme: string) => {
    setTheme(theme);
  };

  return (
    <div className={`flex flex-row rounded bg-white dark:bg-gray-900 mb-4`}>
      <button
        key="dark"
        className={`flex items-center bg-transparent hover:bg-secondary text-primary hover:text-white dark:hover:text-gray-900 border border-primary hover:border-secondary rounded transition-all ease-in-out duration-900 outline-none focus:shadow-secondary focus:shadow-focus subpixel-antialiased aria-selected:bg-primary hover:aria-selected:bg-secondary aria-selected:border-primary hover:aria-selected:border-secondary aria-selected:text-white dark:aria-selected:text-gray-900 px-2 py-1 text-xs font-normal  justify-center grow rounded-r-none`}
        onClick={() => handleMenuClick("dark")}
        aria-selected={theme === "dark" ? true : false}
      >
        <MoonIcon className="w-3 h-3 mr-1 flex-shrink-0" /> Dark
      </button>
      <button
        key="light"
        className={`flex items-center bg-transparent hover:bg-secondary text-primary hover:text-white dark:hover:text-gray-900 border border-primary hover:border-secondary rounded transition-all ease-in-out duration-900 outline-none focus:shadow-secondary focus:shadow-focus subpixel-antialiased aria-selected:bg-primary hover:aria-selected:bg-secondary aria-selected:border-primary hover:aria-selected:border-secondary aria-selected:text-white dark:aria-selected:text-gray-900 px-2 py-1 text-xs font-normal rounded-none border-x-0 justify-center grow`}
        onClick={() => handleMenuClick("light")}
        aria-selected={theme === "light" ? true : false}
      >
        <SunIcon className="w-3 h-3 mr-1 flex-shrink-0" /> Light
      </button>
      <button
        key="system"
        className={`flex items-center bg-transparent hover:bg-secondary text-primary hover:text-white dark:hover:text-gray-900 border border-primary hover:border-secondary rounded transition-all ease-in-out duration-900 outline-none focus:shadow-secondary focus:shadow-focus subpixel-antialiased aria-selected:bg-primary hover:aria-selected:bg-secondary aria-selected:border-primary hover:aria-selected:border-secondary aria-selected:text-white dark:aria-selected:text-gray-900 px-2 py-1 text-xs font-normal rounded-l-none justify-center grow`}
        onClick={() => handleMenuClick("system")}
        aria-selected={theme === "system" ? true : false}
      >
        <ComputerDesktopIcon className="w-3 h-3 mr-1 flex-shrink-0" /> System
      </button>
    </div>
  );
};

export default ModeSwitcher;
