import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="absolute w-4/5 h-dvh bg-black opacity-80"></div>
      <div className="w-4/5 h-dvh relative image">
        <div className="w-4/5 h-fit absolute inset-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="text-white text-center font-medium">
            <h1 className="text-2xl">Welcome</h1>
            <p className="text-6xl my-4">
              I'm <span>Muzamil Hussain</span>
            </p>
            <span className="text-2xl text-gray-100">
              based in Lahore, Pakistan
            </span>
          </div>
          <div className="flex justify-center mt-6">
            <button className="border-2 border-green text-green px-8 py-2 rounded-full">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
