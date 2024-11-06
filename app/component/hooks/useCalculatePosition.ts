import { useLayoutEffect, useState, RefObject } from "react";

const useCalculatePosition = (
  dropdownRef: RefObject<HTMLDivElement>,
  triggerRef: RefObject<HTMLDivElement>,
  isOpen: boolean
): string => {
  const [position, setPosition] = useState("to-right");

  useLayoutEffect(() => {
    if (isOpen && dropdownRef.current && triggerRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const triggerRect = triggerRef.current.getBoundingClientRect();

      const fitsRight =
        triggerRect.right + dropdownRect.width <= window.innerWidth;
      const fitsLeft = triggerRect.left - dropdownRect.width >= 0;

      if (!fitsRight && fitsLeft) {
        setPosition("to-left");
      } else {
        setPosition("to-right");
      }
    }
  }, [isOpen, dropdownRef, triggerRef]);

  return position;
};

export default useCalculatePosition;
