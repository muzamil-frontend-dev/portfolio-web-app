import React from "react";
import Heading from "../Components/Heading";
import SummaryBox from "../Components/SummaryBox";

const educationData = [
  {
    name: "computer science",
    institute: "international university",
    tenure: "2000 - 2004",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
  {
    name: "Bachelor Degree",
    institute: "University of California",
    tenure: "2005 - 2008",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
  {
    name: "Master Degree",
    institute: "Harvard University",
    tenure: "2009 - 2012",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
];

const experiencenData = [
  {
    name: "Jr. UI UX Designer",
    institute: "Themeforest",
    tenure: "2012 - 2013",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
  {
    name: "Jr. Product Designer",
    institute: "Dribbble",
    tenure: "2014 - 2016",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
  {
    name: "Product Designer",
    institute: "Adobe",
    tenure: "2017 - 2019",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
];

const Summary = () => {
  return (
    <section className="bg-black-200 text-white" id="summary">
      <div className="container mx-auto pt-18 px-8">
        <Heading title="summary" tagLine="resume" />
        <section className="grid gap-x-12 gap-y-4 grid-cols-1 sm:grid-cols-2">
          <div className="">
            <h1 className="text-2xl font-semibold mb-5">My Education</h1>
            {educationData.map((item, i) => (
              <SummaryBox
                key={i}
                name={item.name}
                institute={item.institute}
                tenure={item.tenure}
                description={item.description}
              />
            ))}
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold mb-5">My Experience</h1>
            {experiencenData.map((item, i) => (
              <SummaryBox
                key={i}
                name={item.name}
                institute={item.institute}
                tenure={item.tenure}
                description={item.description}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Summary;
