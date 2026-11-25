import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import SocialLinks from "../Components/SocialLinks";
import { profile } from "../data/profile";

const menuItems = [
  { name: "Home", id: "home" },
  { name: "About Me", id: "about" },
  { name: "What I Do", id: "services" },
  { name: "Resume", id: "summary" },
  { name: "Portfolio", id: "portfolio" },
  // { name: "Testimonial", id: "testimonial" },
  { name: "Contact", id: "contact-us" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Highlight the last section whose top has scrolled past the header.
    const handleScroll = () => {
      let currentSection = "";
      for (const { id } of menuItems) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= 100) {
          currentSection = id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on component mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="lg:w-64">
      {/* Desktop Nav Menu view */}
      <nav className="hidden lg:flex fixed flex-col items-center justify-between w-64 h-full bg-black-100 overflow-y-auto">
        {/* Profile Section */}
        <a href="#home">
          <div className="w-48 h-48 mx-auto p-2 mt-8 mb-2 bg-gray-900 rounded-full">
            <img
              className="w-full h-full rounded-full"
              src="images/profile-img-2.jpg"
              alt="profile"
            />
          </div>
          <h1 className="text-xl text-center text-white">{profile.name}</h1>
        </a>
        <ul className="my-4">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={classNames(
                "py-2 text-lg text-white text-center transition duration-300 ease-in-out hover:text-green",
                { "active-nav-item": activeSection === item.id }
              )}
            >
              <a href={`#${item.id}`}>{item.name}</a>
            </li>
          ))}
        </ul>
        <SocialLinks className="flex justify-center items-center gap-6 mb-2 text-sm text-gray-200" />
      </nav>

      {/* Tab/Mobile Nav Menu view */}
      <nav className="fixed top-0 left-0 w-full bg-black-100 z-10 lg:hidden">
        <section className="flex justify-between items-center py-4 px-4">
          <a href="#home" onClick={closeMenu}>
            <h1 className="text-xl text-white">{profile.name}</h1>
          </a>
          <div className="flex items-center">
            <SocialLinks className="inline-flex gap-5 mr-5 text-sm text-gray-200" />
            <button
              type="button"
              className="flex justify-center items-center w-7 h-7 text-white text-2xl"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
            </button>
          </div>
        </section>
        {/* Toggle Menu */}
        <section
          id="mobile-menu"
          className={classNames(
            "absolute w-full max-h-hvh bg-slate-100 overflow-y-auto transition-all duration-700 ease-in-out",
            isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
          )}
        >
          <ul className="mt-2">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={classNames(
                  "border-b border-slate-200 text-white",
                  { "active-nav-item": activeSection === item.id }
                )}
              >
                <a
                  href={`#${item.id}`}
                  className="block py-2 px-4"
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default Header;
