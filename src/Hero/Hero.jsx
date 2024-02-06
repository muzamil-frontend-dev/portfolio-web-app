import React from "react";
import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="sm:w-4/5 h-screen relative image">
      <div className="absolute w-full h-screen bg-black opacity-80 py-24"></div>
      <div className="w-4/5 h-fit absolute inset-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="text-white text-center font-medium">
          <h1 className="text-2xl">Welcome</h1>
          <p className="text-6xl my-4">
            <TypeAnimation
              sequence={[
                "I'm Muzamil Hussain",
                800,
                "I'm a Developer.",
                800,
                "I'm a Designer.",
                800,
              ]}
              wrapper="span"
              speed={200}
              repeat={Infinity}
              className="font-bold"
            />
          </p>
          <span className="text-2xl text-gray-100">
            based in Lahore, Pakistan
          </span>
        </div>
        <div className="flex justify-center mt-10">
          <button className="border-2 border-green text-green px-8 py-2 rounded-full hover:bg-green hover:text-white transition-all">
            Hire Me
          </button>
        </div>
      </div>
      <div className="w-fit absolute animate inset-x-1/2 -translate-x-1/2">
        <FontAwesomeIcon
          icon={faChevronDown}
          className="text-white font-bold text-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
