import { MouseEvent, FC } from "react";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/solid/index";

interface ThemeSectionHeaderProps {
  randomTheme: string | null;
  userTheme: string | null;
  formatThemeTitle: (themeTitle: string) => string;
  applyRandomTheme: () => void;
}

const ThemeSectionHeader: FC<ThemeSectionHeaderProps> = ({
  randomTheme,
  userTheme,
  formatThemeTitle,
  applyRandomTheme,
}) => {
  const handleRandomizeClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (randomTheme && document.body.classList.contains(randomTheme)) {
      document.body.classList.remove(randomTheme);
    }
    if (userTheme) {
      document.body.classList.remove(userTheme);
      localStorage.removeItem("colorTheme");
    }
    applyRandomTheme();
  };

  return (
    <>
      <hr className="mb-3 h-px border-0 bg-gray-300 dark:bg-gray-700" />
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          {userTheme ? (
            formatThemeTitle(userTheme)
          ) : randomTheme ? (
            <div>
              {formatThemeTitle(randomTheme)}{" "}
              <span className="text-gray-400 dark:text-gray-600">(Random)</span>
            </div>
          ) : null}
        </div>

        <button
          onClick={handleRandomizeClick}
          className={`hover:bg-secondary text-primary border-primary hover:border-secondary duration-900 focus:shadow-secondary focus:shadow-focus flex items-center rounded border border-none bg-transparent px-2 py-1 text-xs font-normal subpixel-antialiased outline-none transition-all ease-in-out hover:text-white dark:hover:text-gray-900`}
        >
          <ArrowPathRoundedSquareIcon className="mr-1 h-4 w-4 " />{" "}
          <span>Random</span>
        </button>
      </div>
    </>
  );
};

export default ThemeSectionHeader;
