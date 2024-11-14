import { Dispatch, SetStateAction, FC } from "react";
// import { Btn } from "@/app/config/componentThemes";
import { XMarkIcon } from "@heroicons/react/24/solid/index";

interface ModeSectionHeaderProps {
  mode: string | undefined;
  setOpenDropdown: Dispatch<SetStateAction<boolean>>;
  explicitMode: string | undefined;
}

const ModeSectionHeader: FC<ModeSectionHeaderProps> = ({
  mode,
  setOpenDropdown,
  explicitMode,
}) => {
  return (
    <div className="mb-3 flex items-center justify-between">
      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
        {mode ? mode.charAt(0).toUpperCase() + mode.slice(1).toLowerCase() : ""}
        {explicitMode === "system" ? (
          <span className="text-gray-400 dark:text-gray-600"> (System)</span>
        ) : null}
      </div>
      <button
        className={` -mr-[0px] -mt-[5px] text-gray-700 dark:text-gray-300`}
        onClick={() => {
          setOpenDropdown(false);
        }}
      >
        <XMarkIcon className="h-4 w-4 flex-shrink-0" />
      </button>
    </div>
  );
};

export default ModeSectionHeader;
