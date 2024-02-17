import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const SkillBox = ({ name, value, targetElement }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const targetElementRef = targetElement.current;

    const handleScroll = () => {
      if (!targetElementRef) return;

      const { top, bottom } = targetElementRef.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Calculate the percentage of the progress bar visible in the viewport
      const visibleHeight = Math.min(bottom, windowHeight) - Math.max(top, 0);
      const visiblePercentage = visibleHeight / targetElementRef.clientHeight;

      // Update the progress state
      setProgress(visiblePercentage * value);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial calculation when component mounts
    handleScroll();

    // Cleanup: remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetElement, value]);

  return (
    <section className="mb-3">
      <div className="flex justify-between mb-2 text-gray-100 font-medium">
        <p>{name}</p>
        <span>
          <CountUp end={progress} duration={2} enableScrollSpy scrollSpyOnce />%
        </span>
      </div>
      <div className="rounded-full h-2 bg-black-100">
        <div
          className="rounded-l-full h-2 bg-green"
          style={{ width: `${progress}%`, transition: "width 2s ease-in-out" }}
        />
      </div>
    </section>
  );
};

export default SkillBox;
