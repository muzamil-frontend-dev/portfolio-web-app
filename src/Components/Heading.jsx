import React from "react";

const Heading = ({ title, tagLine }) => {
  return (
    <section className="relative text-center mb-12">
      <h1 className="uppercase text-9xl font-semibold text-slate-300 tracking-wider opacity-10">
        {title}
      </h1>
      <p className="w-full h-fit absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 capitalize text-4xl font-semibold leading-extra-loose">
        {tagLine}
        <span className="block w-20 mx-auto border-b-3 border-green"></span>
      </p>
    </section>
  );
};

export default Heading;
