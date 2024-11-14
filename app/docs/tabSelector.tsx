import React from "react";

interface TabSelectorProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  tabs: string[];
}

const TabSelector: React.FC<TabSelectorProps> = ({
  currentTab,
  onTabChange,
  tabs,
}) => {
  const getButtonClassName = (tab: string): string =>
    `inline-block rounded-t-lg border-b-2 transition-all ease-in-out duration-900 ${
      currentTab === tab
        ? "border-secondary text-secondary"
        : "border-transparent text-primary"
    } px-4 py-2 hover:text-secondary`;

  return (
    <div className="duration-900 -mb-[8px] rounded-t border border-primary/30 text-center text-xs font-medium transition-all ease-in-out">
      <ul className="-mb-px flex flex-wrap">
        {tabs.map((tab) => (
          <li key={tab} className="tab-item">
            <button
              onClick={() => onTabChange(tab)}
              className={getButtonClassName(tab)}
              aria-current={currentTab === tab ? "page" : undefined}
            >
              {tab.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabSelector;
