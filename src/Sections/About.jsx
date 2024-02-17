import React from "react";
import CountUp from "react-countup";
import Heading from "../Components/Heading";

const About = () => {
  return (
    <section className="bg-black-200 text-white" id="about">
      <div className="container mx-auto py-18 px-3 sm:px-8">
        <Heading title="about me" tagLine="know me more" />
        <section className="grid grid-cols-1 lg:grid-cols-6 gap-4">
          <div className="lg:col-span-4 text-center lg:text-left">
            <h1 className="text-2.5xl font-semibold mb-4">
              I'm <span className="text-green">Muzamil Hussain,</span> a
              Software Engineer
            </h1>
            <p className="text-slate-300 mb-4 leading-7">
              I help you build brand for your business at an affordable price.
              Thousands of clients have procured exceptional results while
              working with our dedicated team. when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
            <p className="text-slate-300 mb-4 leading-7">
              Delivering work within time and budget which meets client’s
              requirements is our moto. Lorem Ipsum has been the industry's
              standard dummy text ever when an unknown printer took a galley.
            </p>
          </div>
          <div className="lg:col-span-2 mt-10 lg:mt-0">
            <ul className="mb-4">
              <li className="py-3 border-b border-slate-400">
                <span className="font-semibold">Name:</span>&nbsp;&nbsp;
                <span>Muzamil Hussain</span>
              </li>
              <li className="py-3 border-b border-slate-400">
                <span className="font-semibold">Emal:</span>&nbsp;&nbsp;
                <a href="https://" className="text-green">
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
              href="https://"
              className="bg-green rounded-full py-3 px-10 text-sm font-medium"
            >
              Download CV
            </a>
          </div>
        </section>
        <ul className="flex flex-row flex-wrap text-center mt-12">
          <li className="md:border-r md:border-slate-200 py-5 px-3 basis-1/2 md:basis-1/4">
            <p className="text-4xl md:text-5xl lg:text-6xl font-medium leading-snug text-slate-300">
              <CountUp end={10} duration={2} enableScrollSpy scrollSpyOnce />+
            </p>
            <span>Years Experience</span>
          </li>
          <li className="md:border-r md:border-slate-200 py-5 px-3 basis-1/2 md:basis-1/4">
            <p className="text-4xl md:text-5xl lg:text-6xl font-medium leading-snug text-slate-300">
              <CountUp end={250} duration={2} enableScrollSpy scrollSpyOnce />+
            </p>
            <span>Happy clients</span>
          </li>
          <li className="md:border-r md:border-slate-200 py-5 px-3 basis-1/2 md:basis-1/4">
            <p className="text-4xl md:text-5xl lg:text-6xl font-medium leading-snug text-slate-300">
              <CountUp end={650} duration={2} enableScrollSpy scrollSpyOnce />+
            </p>
            <span>projects Done</span>
          </li>
          <li className="py-5 px-3 basis-1/2 md:basis-1/4">
            <p className="text-4xl md:text-5xl lg:text-6xl font-medium leading-snug text-slate-300">
              <CountUp end={38} duration={2} enableScrollSpy scrollSpyOnce />
            </p>
            <span>Get Awards</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
