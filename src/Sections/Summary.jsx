import React, { useRef } from "react";
import Heading from "../Components/Heading";
import SummaryBox from "../Components/SummaryBox";
import SkillBox from "../Components/SkillBox";
import Button from "../Components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const educations = [
  {
    name: "MERN Stack Development",
    institute: "EVS Professional Training Institute",
    tenure: "Oct 2022",
    description:
      "In this course, I enhanced my JavaScript development skills by building database-driven applications.",
  },
  {
    name: "Mastering React",
    institute: "Code With Mosh",
    tenure: "Aug 2021",
    description:
      "Learn React basics and core concepts by building dynamic user interfaces and interactive applications.",
  },
  {
    name: "BS in Computer Science",
    institute: "University of South Asia",
    tenure: "2015 - 2020",
    description:
      "Learn Bachelor's degree to understand the fundamentals of computer systems and operations.",
  },
];

const experiences = [
  {
    name: "React.js Engineer",
    institute: "Starzplay Arabia",
    tenure: "2022 - Present",
    description:
      "Develop user interface components and implementing them following well-known React.js workflows such as Redux.",
  },
  {
    name: "Front End Developer",
    institute: "Approcx",
    tenure: "May 2022 - Nov 2022",
    description:
      "Managing different types of tables and grids for patients and doctors in hospital management system.",
  },
  {
    name: "Jr. Front End Developer",
    institute: "Magnic Digital Pvt Ltd",
    tenure: "2020 - 2022",
    description:
      "Develop user-facing features to determine the structure and design of web pages.",
  },
];

const skills = [
  {
    name: "JavaScript",
    progress: 80,
  },
  {
    name: "TypeScript",
    progress: 50,
  },
  {
    name: "React JS",
    progress: 90,
  },
  {
    name: "Redux",
    progress: 90,
  },
  {
    name: "Node JS",
    progress: 70,
  },
  {
    name: "Next JS",
    progress: 60,
  },
  {
    name: "Material UI",
    progress: 60,
  },
  {
    name: "Tailwind CSS",
    progress: 80,
  },
];

const Summary = () => {
  const targetElementRef = useRef(null);
  return (
    <section className="bg-gray-900 text-white" id="summary">
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
