import React from "react";
import Heading from "../Components/Heading";
import ServiceBox from "../Components/ServiceBox";
import { services } from "../data/services";

const Services = () => {
  return (
    <section className="bg-gray-900 text-white" id="services">
      <div className="container mx-auto py-18 px-3 sm:px-8">
        <Heading title="services" tagLine="what I do?" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 lg:w-11/12 mx-auto">
          {services.map((service) => (
            <ServiceBox
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
