import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CustomTabs = () => (
  <Tabs defaultFocus forceRenderTabPanel>
    <TabList>
      <Tab>All</Tab>
      <Tab>Design</Tab>
      <Tab>Brand</Tab>
      <Tab>Photos</Tab>
    </TabList>

    <TabPanel>
      <div class="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-8">
        <div class="h-min w-full bg-red-400">
          <img
            class="object-cover"
            src="https://source.unsplash.com/random/700x400/?subway"
            alt="subway"
          />
        </div>
        <div class="h-min w-full bg-blue-400">
          <img
            class="object-cover"
            src="https://source.unsplash.com/random/?city"
            alt="city"
          />
        </div>
        <div class="h-min w-full bg-orange-400">
          <img
            class="object-cover"
            src="https://source.unsplash.com/random/700x300/?fruit"
            alt="fruit"
          />
        </div>
        <div class="h-min w-full bg-green-400">
          <img
            class="object-cover"
            src="https://source.unsplash.com/random/700x500/?forest"
            alt="forest"
          />
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div class="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-8">
        <div class="h-min w-full bg-yellow-400">
          <img
            class="object-cover"
            src="https://source.unsplash.com/random/?sunset"
            alt="sunset"
          />
        </div>
        <div class="h-min w-full bg-lime-400">
          <img
            class="object-cover"
            src="https://source.unsplash.com/random/?desert"
            alt="desert"
          />
        </div>
        <div class="h-min w-full bg-fuchsia-400">
          <img
            class="object-cover"
            src="https://source.unsplash.com/random/700x250/?ocean"
            alt="ocean"
          />
        </div>
        <div class="h-min w-full bg-teal-400">
          <img
            class="object-cover"
            src="https://source.unsplash.com/random/700x300/?clouds"
            alt="clouds"
          />
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div class="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-8">
        <div class="h-min w-full bg-yellow-400">
          <img
            class="object-cover"
            src="https://source.unsplash.com/random/?sunset"
            alt="sunset"
          />
        </div>
        <div class="h-min w-full bg-lime-400">
          <img
            class="object-cover"
            src="https://source.unsplash.com/random/?desert"
            alt="desert"
          />
        </div>
        <div class="h-min w-full bg-fuchsia-400">
          <img
            class="object-cover"
            src="https://source.unsplash.com/random/700x250/?ocean"
            alt="ocean"
          />
        </div>
        <div class="h-min w-full bg-teal-400">
          <img
            class="object-cover"
            src="https://source.unsplash.com/random/700x300/?clouds"
            alt="clouds"
          />
        </div>
      </div>
    </TabPanel>
  </Tabs>
);

export default CustomTabs;