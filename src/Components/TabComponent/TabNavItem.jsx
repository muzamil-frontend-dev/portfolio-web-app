import React from "react";
import classNames from "classnames";

const TabNavItem = ({
  id,
  title,
  activeTab,
  setActiveTab,
  showAllTabs,
  setShowAllTabs,
}) => {
  const handleClick = () => {
    setActiveTab(id);
    setShowAllTabs(false);
  };

  return (
    <>
      {title === "all" ? (
        <li
          className={classNames("", { active: showAllTabs })}
          onClick={() => setShowAllTabs(true)}
        >
          {title}
        </li>
      ) : (
        <li
          className={classNames("", { active: activeTab === id })}
          onClick={handleClick}
        >
          {title}
        </li>
      )}
    </>
  );
};

export default TabNavItem;
