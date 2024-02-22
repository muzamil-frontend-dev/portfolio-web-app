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
  console.log("showAllTabs: ", showAllTabs);

  return (
    <section>
      <ul>
        {tabs.map((tab) => (
          <TabNavItem
            key={tab.id}
            id={tab.id}
            title={tab.name}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            showAllTabs={showAllTabs}
            setShowAllTabs={setShowAllTabs}
          />
        ))}
      </ul>
      {/* Outlet */}
      <div>
        {tabContent.map((tab) => (
          <TabContent
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
