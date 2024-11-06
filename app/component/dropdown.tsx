import React, {
  cloneElement,
  ReactElement,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import useOutsideClick from "./hooks/useOutsideClick";
import useCalculatePosition from "./hooks/useCalculatePosition";

interface DropdownProps {
  trigger: ReactElement;
  menu: ReactElement;
  openDropdown?: boolean;
  setOpenDropdown: Dispatch<SetStateAction<boolean>>;
  widthClass?: string;
  position?: "to-left" | "to-right";
}

const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  menu,
  openDropdown,
  setOpenDropdown,
  widthClass = "w-[340px]",
  position: manualPosition,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const autoPosition = useCalculatePosition(
    dropdownRef,
    triggerRef,
    Boolean(openDropdown)
  );
  const effectivePosition = manualPosition || autoPosition;
  const positionClass = effectivePosition === "to-left" ? "right-0" : "left-0";
  const dropdownClasses = `absolute ${positionClass} z-50 mt-2 flex flex-col rounded bg-white p-3 shadow dark:bg-gray-900 dark:shadow-black ${widthClass}`;

  useOutsideClick(dropdownRef, () => {
    if (openDropdown) setOpenDropdown(false);
  });

  return (
    <div className="flex" ref={triggerRef}>
      <div className="relative">
        {cloneElement(trigger, {
          onClick: () => {
            setOpenDropdown(!openDropdown);
          },
        })}
        {openDropdown && (
          <div ref={dropdownRef} className={dropdownClasses}>
            {menu}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
