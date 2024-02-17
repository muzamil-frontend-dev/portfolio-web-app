import React, { useRef } from "react";
import Heading from "../Components/Heading";
import SummaryBox from "../Components/SummaryBox";
import SkillBox from "../Components/SkillBox";
import Button from "../Components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const educations = [
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

const experiences = [
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

const skills = [
  {
    name: "web design",
    progress: 65,
  },
  {
    name: "React JS",
    progress: 70,
  },
  {
    name: "HTML/CSS",
    progress: 95,
  },
  {
    name: "Angular JS",
    progress: 60,
  },
  {
    name: "JavaScript",
    progress: 80,
  },
  {
    name: "Bootstrap",
    progress: 99,
  },
];

const Summary = () => {
  const targetElementRef = useRef(null);
  return (
    <section className="bg-black-200 text-white" id="summary">
      <div className="container mx-auto py-18 px-8">
        <Heading title="summary" tagLine="resume" />
        <section className="grid gap-x-12 gap-y-4 grid-cols-1 sm:grid-cols-2">
          <div>
            <h1 className="text-2xl font-semibold mb-5">My Education</h1>
            {educations.map((item, i) => (
              <SummaryBox
                key={i}
                name={item.name}
                institute={item.institute}
                tenure={item.tenure}
                description={item.description}
              />
            ))}
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-5">My Experience</h1>
            {experiences.map((item, i) => (
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
        <h1 className="text-2xl font-semibold mt-5 mb-6">My Skills</h1>
        <section
          ref={targetElementRef}
          className="grid gap-x-12 gap-y-4 grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {skills.map((item, i) => (
            <SkillBox
              key={i}
              name={item.name}
              value={item.progress}
              targetElement={targetElementRef}
            />
          ))}
        </section>
        <div className="mt-18 text-center">
          <Button className="text-gray-800 border-2 border-gray-800 hover:bg-gray-800 hover:text-white">
            <a href="https://">Download CV</a>
            <FontAwesomeIcon icon={faDownload} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Summary;
