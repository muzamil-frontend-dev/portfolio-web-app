import React, { useState } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import FirstTab from "./AllTabs/FirstTab";
import SecondTab from "./AllTabs/SecondTab";
import ThirdTab from "./AllTabs/ThirdTab";

const tabs = [
  {
    id: 0,
    name: "all",
  },
  {
    id: 1,
    name: "design",
  },
  {
    id: 2,
    name: "brands",
  },
  {
    id: 3,
    name: "photos",
  },
];
const tabContent = [
  {
    id: 1,
    content: <FirstTab />,
  },
  {
    id: 2,
    content: <SecondTab />,
  },
  {
    id: 3,
    content: <ThirdTab />,
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);
  const [showAllTabs, setShowAllTabs] = useState(true);

  return (
    <section>
      <TabNavItem
        data={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showAllTabs={showAllTabs}
        setShowAllTabs={setShowAllTabs}
      />
      {/* Outlet */}
      <div>
        {tabContent.map((tab) => (
          <TabContent
            key={tab.id}
            activeTab={activeTab}
            showAllTabs={showAllTabs}
            id={tab.id}
          >
            {tab.content}
          </TabContent>
        ))}
      </div>
    </section>
  );
};

export default Tabs;
