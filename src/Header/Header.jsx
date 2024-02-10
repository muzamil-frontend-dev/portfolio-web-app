import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(() => {
    return true;
  });
  const menuItems = [
    { name: "Home", url: "#home" },
    { name: "About Me", url: "#about" },
    { name: "What I Do", url: "#services" },
    { name: "Resume", url: "#resume" },
    { name: "Portfolio", url: "#portfolio" },
    { name: "Testimonial", url: "#testimonial" },
    { name: "Contact", url: "#contact" },
  ];
  return (
    <header className="w-full sm:w-64">
      {/* Desktop Nav Menu view */}
      <nav className="hidden sm:block fixed w-64 h-full bg-black px-8 overflow-y-auto">
        {/* Profile Section */}
        <a href="#home">
          <div className="w-40 h-40 mx-auto p-2 mt-8 mb-2 bg-gray-900 rounded-full">
            <img
              className="w-full h-full rounded-full"
              src="images/profile-img.jpg"
              alt="profile"
            />
          </div>
          <h1 className="text-xl text-center text-white">Muzamil Hussain</h1>
        </a>
        <ul className="my-4">
          {menuItems.map((item, index) => (
            <li key={index} className="py-2 text-lg text-white text-center">
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
      {/* Mobile Nav Menu view */}
      <nav className="fixed top-0 left-0 w-full bg-black z-10 sm:hidden">
        <section className="flex justify-between items-center py-3 pl-2 pr-4">
          <a href="#home">
            <h1 className="text-2xl text-white">Muzamil Hussain</h1>
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
            "absolute w-full h-48 bg-slate-50 overflow-y-auto transition-all duration-700 ease-in-out",
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
                className="py-2 px-4 text-md text-white border-b border-slate-100"
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
