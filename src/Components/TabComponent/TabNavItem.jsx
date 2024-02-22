import React from "react";
import classNames from "classnames";

const TabNavItem = ({
  data,
  activeTab,
  setActiveTab,
  showAllTabs,
  setShowAllTabs,
}) => {
  const handleClick = (tab) => {
    if (tab.name === "all") {
      setShowAllTabs(true);
      setActiveTab(tab.id);
    } else {
      setShowAllTabs(false);
      setActiveTab(tab.id);
    }
  };

  return (
    <ul className="text-center">
      {data.map((tab) => (
        <li
          key={tab.id}
          className={classNames("inline capitalize py-2 px-4 cursor-pointer", {
            "text-white-100": activeTab !== tab.id,
            "text-green border-b-2 border-b-green": activeTab === tab.id,
          })}
          onClick={() => handleClick(tab)}
        >
          {tab.name}
        </li>
      ))}
    </ul>
  );
};

export default TabNavItem;
