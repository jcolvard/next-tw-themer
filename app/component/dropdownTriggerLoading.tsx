import { ArrowPathIcon } from "@heroicons/react/24/solid/index";

function DropdownTriggerLoading() {
  return (
    <button
      className={`flex items-center bg-transparent text-gray-400 dark:text-gray-500 border border-gray-400 dark:border-gray-500 outline-none cursor-not-allowed subpixel-antialiased px-2 py-1 rounded-full`}
      disabled
    >
      <ArrowPathIcon className="animate-spin w-4 h-4 flex-shrink-0" />
      <div className="mx-2">|</div>
      <ArrowPathIcon className="animate-spin w-4 h-4 flex-shrink-0" />
    </button>
  );
}

export default DropdownTriggerLoading;
