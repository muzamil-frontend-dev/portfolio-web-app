import React from "react";

const TabContent = ({ id, activeTab, showAllTabs, children }) => {
  return activeTab === id || showAllTabs ? (
    <div className="tabContent">{children}</div>
  ) : null;
};

export default TabContent;
