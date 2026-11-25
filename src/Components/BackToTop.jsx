import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

// Floating button that appears once the hero has been scrolled past.
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      setIsVisible(window.scrollY > window.innerHeight * 0.75);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={classNames(
        "fixed bottom-4 right-4 z-40 flex items-center justify-center w-10 h-10 rounded-full bg-green text-white shadow-lg transition-all duration-300 hover:bg-green-100",
        isVisible
          ? "visible opacity-100 translate-y-0"
          : "invisible opacity-0 translate-y-4"
      )}
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  );
};

export default BackToTop;
