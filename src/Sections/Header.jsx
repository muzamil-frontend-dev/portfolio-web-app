import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { name: "home", element: document.getElementById("home") },
        { name: "about", element: document.getElementById("about") },
        // { name: "services", element: document.getElementById("services") },
        { name: "summary", element: document.getElementById("summary") },
        { name: "portfolio", element: document.getElementById("portfolio") },
        // {
        //   name: "testimonial",
        //   element: document.getElementById("testimonial"),
        // },
        { name: "contact-us", element: document.getElementById("contact-us") },
      ];

      let currentSection = "";

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section.name;
            break;
          } else if (rect.top <= 100) {
            currentSection = section.name;
          }
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

  const menuItems = [
    { name: "Home", url: "#home" },
    { name: "About Me", url: "#about" },
    // { name: "What I Do", url: "#services" },
    { name: "Resume", url: "#summary" },
    { name: "Portfolio", url: "#portfolio" },
    // { name: "Testimonial", url: "#testimonial" },
    { name: "Contact", url: "#contact-us" },
  ];

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
          <h1 className="text-xl text-center text-white">Muzamil Hussain</h1>
        </a>
        <ul className="my-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={classNames(
                "py-2 text-lg text-white text-center transition duration-300 ease-in-out hover:text-green",
                {
                  "active-nav-item": activeSection === item.url.slice(1), // Remove '#'
                }
              )}
            >
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
        <ul className="flex justify-center items-center mb-2">
          <li className="text-sm text-gray-200">
            <a
              href="https://www.linkedin.com/in/muzamil167/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li className="text-sm text-gray-200 mx-6">
            <a
              href="https://github.com/muzamil-frontend-dev"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="text-sm text-gray-200">
            <a
              href="https://www.hackerrank.com/profile/hmuzamil567"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </li>
        </ul>
      </nav>

      {/* Tab/Mobile Nav Menu view */}
      <nav className="fixed top-0 left-0 w-full bg-black-100 z-10 lg:hidden">
        <section className="flex justify-between items-center py-4 px-4">
          <a href="#home">
            <h1 className="text-xl text-white">Muzamil Hussain</h1>
          </a>
          <div className="flex items-center">
            <ul className="inline-flex mr-5">
              <li className="text-sm text-gray-200">
                <a
                  href="https://www.linkedin.com/in/muzamil167/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li className="text-sm text-gray-200 mx-5">
                <a
                  href="https://github.com/muzamil-frontend-dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className="text-sm text-gray-200">
                <a
                  href="https://www.hackerrank.com/profile/hmuzamil567"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </li>
            </ul>
            <div
              className="flex justify-center items-center w-7 h-7 text-white text-2xl"
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              <FontAwesomeIcon icon={openMenu ? faBars : faXmark} />
            </div>
          </div>
        </section>
        {/* Toggle Menu */}
        <section
          className={classNames(
            "absolute w-full max-h-hvh bg-slate-100 overflow-y-auto transition-all duration-700 ease-in-out",
            {
              "invisible opacity-0": openMenu,
            },
            {
              "visible opacity-100": !openMenu,
            }
          )}
        >
          <ul className="mt-2">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={classNames(
                  "py-2 px-4 text-white border-b border-slate-200",
                  {
                    "active-nav-item": activeSection === item.url.slice(1), // Remove '#'
                  }
                )}
              >
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default Header;
