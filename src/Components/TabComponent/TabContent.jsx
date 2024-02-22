import React from "react";

const TabContent = ({ id, activeTab, showAllTabs, children }) => {
  return activeTab === id || showAllTabs ? (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-8">
      {children}
    </div>
  ) : null;
};

export default TabContent;
