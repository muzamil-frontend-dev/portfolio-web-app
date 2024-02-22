import React from "react";
import Heading from "../Components/Heading";
import Tabs from "../Components/TabComponent/Tabs";

const Portfolio = () => {
  return (
    <section className="bg-gray-900 text-white" id="portfolio">
      <div className="contianer mx-auto py-18 px-8">
        <Heading title="portfolio" tagLine="my work" />
        <Tabs />
      </div>
    </section>
  );
};

export default Portfolio;
