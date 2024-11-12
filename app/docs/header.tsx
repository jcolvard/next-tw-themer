import NextTailwindThemer from "../../package/index";
import {
  PaintBrushIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid/index";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  return (
    <header className="duration-900 sticky top-0 z-10 border-y-2 border-primary bg-white px-4 py-4 text-primary transition-all ease-in-out dark:bg-black">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className={`flex items-center justify-start text-[21px]`}>
            <span className="duration-900 text-primary transition-all ease-in-out">
              <PaintBrushIcon className="mr-1 h-6 w-6 flex-shrink-0" />
            </span>
            <span
              className={`${oswald.className} text-gray-500 antialiased dark:text-gray-200`}
            >
              NextTwThemer
            </span>
          </h1>
        </div>
        <nav className="flex ">
          <ul className="flex items-center">
            <li className="flex-1">
              <button className="duration-900 subpixel-antialiasedmr-3 group mr-4 flex items-center rounded-full border border-primary bg-transparent px-2 py-1 text-primary outline-none transition-all ease-in-out hover:border-secondary hover:bg-secondary hover:text-white focus:shadow-focus focus:shadow-secondary dark:hover:text-gray-900">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 98 96"
                  xmlns="http://www.w3.org/2000/svg"
                  className="duration-900 mr-1 text-primary transition-all ease-in-out group-hover:text-white group-hover:dark:text-black"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                    fill="currentColor"
                  />
                </svg>
                <span> Get the code for this </span>
                <ArrowRightIcon className="ml-1 h-4 w-4 flex-shrink-0" />
              </button>
            </li>
            <li>
              <NextTailwindThemer />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
