import React from "react";
import Heading from "../Components/Heading";
import ServiceBox from "../Components/ServiceBox";

const servicesList = [
  {
    name: "graphic",
    title: "Graphic Design",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
  {
    name: "web",
    title: "Web Design",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
  {
    name: "ui",
    title: "UI/UX Design",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
  {
    name: "app",
    title: "App Design & Develop",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
  {
    name: "buisness",
    title: "Buisness Analysis",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
  {
    name: "seo",
    title: "Seo Marketing",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-900 text-white" id="services">
      <div className="container mx-auto pt-18 px-3 lg:px-8">
        <Heading title="services" tagLine="what I do?" />
        <section className="flex flex-wrap">
          {servicesList.map((service, i) => (
            <ServiceBox
              key={i}
              name={service.name}
              title={service.title}
              description={service.description}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Services;
