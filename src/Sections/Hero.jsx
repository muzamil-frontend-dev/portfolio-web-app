import React, { useEffect, useRef } from "react";
import "../App.css";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { profile } from "../data/profile";

// Background moves at half the scroll speed, like the reference's parallaxie
// (speed 0.5).
const PARALLAX_SPEED = 0.5;

const useParallax = (ref) => {
  useEffect(() => {
    const element = ref.current;
    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!element || prefersReducedMotion) return;

    let frame = null;
    const update = () => {
      frame = null;
      const scrolled = window.scrollY;
      // Only animate while the hero is on screen.
      if (scrolled <= element.offsetHeight) {
        element.style.backgroundPositionY = `calc(50% + ${
          scrolled * PARALLAX_SPEED
        }px)`;
      }
    };
    const handleScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [ref]);
};

const Hero = () => {
  const backgroundRef = useRef(null);
  useParallax(backgroundRef);

  return (
    <div
      ref={backgroundRef}
      className="h-screen relative bg-image bg-center"
      id="home"
    >
      <div className="absolute w-full h-screen bg-black-100 opacity-80 py-24"></div>
      <div className="w-full h-fit absolute inset-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="text-white text-center font-medium">
          <h1 className="text-xl sm:text-2xl">Welcome</h1>
          <p className="text-3xl md:text-6xl my-4">
            <TypeAnimation
              sequence={[
                `I'm ${profile.name}`,
                800,
                "I'm a Software Engineer.",
                800,
                "I'm a Front-end Developer.",
                800,
              ]}
              wrapper="span"
              speed={200}
              repeat={Infinity}
              className="font-bold"
            />
          </p>
          <span className="text-xl sm:text-2xl text-gray-100">
            based in {profile.location}
          </span>
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="#contact-us"
            className="border-2 border-green text-green px-8 py-2 rounded-full hover:bg-green hover:text-white transition-all"
          >
            Hire Me
          </a>
        </div>
      </div>
      <a
        href="#about"
        aria-label="Scroll to About"
        className="w-fit h-20 absolute animate inset-x-1/2 -translate-x-1/2"
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          className="text-white font-bold text-xl"
        />
      </a>
    </div>
  );
};

export default Hero;
