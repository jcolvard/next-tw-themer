import {
  MoonIcon,
  SunIcon,
  ComputerDesktopIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/solid/index";

interface TriggerProps {
  mode: string | undefined;
  onClick: () => void;
}

function DropdownTrigger({ mode, onClick }: TriggerProps) {
  return (
    <button
      className={`flex items-center bg-transparent hover:bg-secondary text-primary hover:text-white dark:hover:text-gray-900 border border-primary hover:border-secondary rounded-full transition-all ease-in-out duration-900 outline-none focus:shadow-secondary focus:shadow-focus subpixel-antialiased px-2 py-1`}
      onClick={onClick}
    >
      {mode === "dark" ? (
        <MoonIcon className="w-4 h-4 flex-shrink-0" />
      ) : mode === "light" ? (
        <SunIcon className="w-4 h-4 flex-shrink-0" />
      ) : (
        <ComputerDesktopIcon className="w-4 h-4 flex-shrink-0" />
      )}
      <div className="mx-2">|</div>
      <PaintBrushIcon className="w-4 h-4 flex-shrink-0" />
    </button>
  );
}

export default DropdownTrigger;
