import React from "react";
import CountUp from "react-countup";
import Heading from "../Components/Heading";
import Button from "../Components/Button";

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
              I'm very ambitious front-end developer seeking a position in a
              well-established IT company, where I can work on challenging and
              diverse projects with the latest technologies and frameworks.
            </p>
            <p className="text-slate-300 mb-4 leading-7">
              I am dedicated to delivering highly scalable and robust
              applications by solving complex problems, enhancing user
              experiences, and improving development processes.
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
                  hmuzamil567@gmail.com
                </a>
              </li>
              {/* <li className="py-3 border-b border-slate-400">
                <span className="font-semibold">Age:</span>&nbsp;&nbsp;
                <span>26</span>
              </li> */}
              <li className="py-3">
                <span className="font-semibold">From:</span>&nbsp;&nbsp;
                <span>Lahore, Pakistan</span>
              </li>
            </ul>
            <Button className="bg-green hover:bg-green-100">
              <a href="https://">Download CV</a>
            </Button>
          </div>
        </section>
        <ul className="flex flex-row flex-wrap text-center mt-12">
          <li className="md:border-r md:border-slate-200 py-5 px-3 basis-1/2 md:basis-1/4">
            <p className="text-4xl md:text-5xl lg:text-6xl font-medium leading-snug text-slate-300">
              <CountUp end={3} duration={2} enableScrollSpy scrollSpyOnce />+
            </p>
            <span>Work Experience</span>
          </li>
          <li className="md:border-r md:border-slate-200 py-5 px-3 basis-1/2 md:basis-1/4">
            <p className="text-4xl md:text-5xl lg:text-6xl font-medium leading-snug text-slate-300">
              <CountUp end={7} duration={2} enableScrollSpy scrollSpyOnce />
            </p>
            <span>Recommendations</span>
          </li>
          <li className="md:border-r md:border-slate-200 py-5 px-3 basis-1/2 md:basis-1/4">
            <p className="text-4xl md:text-5xl lg:text-6xl font-medium leading-snug text-slate-300">
              <CountUp end={10} duration={2} enableScrollSpy scrollSpyOnce />+
            </p>
            <span>Projects Completed</span>
          </li>
          <li className="py-5 px-3 basis-1/2 md:basis-1/4">
            <p className="text-4xl md:text-5xl lg:text-6xl font-medium leading-snug text-slate-300">
              <CountUp end={5} duration={2} enableScrollSpy scrollSpyOnce />
            </p>
            <span>achievements</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
