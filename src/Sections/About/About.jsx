import React from "react";
import Heading from "../../Components/Heading/Heading";

const About = () => {
  return (
    <div className="bg-black-200 text-white py-18 px-5 sm:px-8" id="about">
      <Heading title="about me" tagLine="know me more" />
      <section className="sm:flex flex-row">
        <div className="sm:basis-auto sm:pr-8 text-center">
          <h1 className="text-3xl font-semibold mb-4">
            I'm <span className="text-green">Muzamil Hussain,</span> a Software
            Engineer
          </h1>
          <p className="text-slate-300 mb-4">
            I help you build brand for your business at an affordable price.
            Thousands of clients have procured exceptional results while working
            with our dedicated team. when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <p className="text-slate-300 mb-4">
            Delivering work within time and budget which meets client’s
            requirements is our moto. Lorem Ipsum has been the industry's
            standard dummy text ever when an unknown printer took a galley.
          </p>
        </div>
        <div className="sm:basis-auto mt-12 sm:mt-0">
          <ul className="mb-4">
            <li className="py-3 border-b border-slate-400">
              <span className="font-semibold">Name:</span>&nbsp;&nbsp;
              <span>Muzamil Hussain</span>
            </li>
            <li className="py-3 border-b border-slate-400">
              <span className="font-semibold">Emal:</span>&nbsp;&nbsp;
              <a href="#" className="text-green">
                chat@muzamil.com
              </a>
            </li>
            <li className="py-3 border-b border-slate-400">
              <span className="font-semibold">Age:</span>&nbsp;&nbsp;
              <span>26</span>
            </li>
            <li className="py-3">
              <span className="font-semibold">From:</span>&nbsp;&nbsp;
              <span>Lahore, Pakistan</span>
            </li>
          </ul>
          <a
            href="#"
            className="bg-green rounded-full py-3 px-10 text-sm font-medium"
          >
            Download CV
          </a>
        </div>
      </section>
      <ul className="flex flex-row flex-wrap text-center mt-12">
        <li className="sm:border-r sm:border-slate-200 py-5 px-3 basis-1/2 sm:basis-1/4">
          <p className="text-xl sm:text-5xl font-medium leading-snug text-slate-300">
            10+
          </p>
          <span>Years Experience</span>
        </li>
        <li className="sm:border-r sm:border-slate-200 py-5 px-3 basis-1/2 sm:basis-1/4">
          <p className="text-xl sm:text-5xl font-medium leading-snug text-slate-300">
            250+
          </p>
          <span>Happy clients</span>
        </li>
        <li className="sm:border-r sm:border-slate-200 py-5 px-3 basis-1/2 sm:basis-1/4">
          <p className="text-xl sm:text-5xl font-medium leading-snug text-slate-300">
            650+
          </p>
          <span>projects Done</span>
        </li>
        <li className="py-5 px-3 basis-1/2 sm:basis-1/4">
          <p className="text-xl sm:text-5xl font-medium leading-snug text-slate-300">
            38
          </p>
          <span>Get Awards</span>
        </li>
      </ul>
    </div>
  );
};

export default About;
