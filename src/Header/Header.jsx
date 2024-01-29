import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
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
    <header className="relative">
      <nav className="hidden sm:block fixed w-64 h-full bg-black px-8 overflow-y-auto">
        {/* Profile Section */}
        <div className="mt-8">
          <Link as="/">
            <span className="block p-2 mb-2 bg-gray rounded-full">
              <img
                className="rounded-full"
                src="images/profile-img.jpg"
                alt=""
              />
            </span>
            <h1 className="text-xl text-center text-white">Muzamil Hussain</h1>
          </Link>
        </div>
        <ul className="my-4">
          {menuItems.map((item, index) => (
            <li key={index} className="py-2 text-lg text-white text-center">
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex justify-center items-center mb-2">
          <li className="text-sm text-gray-2">
            <Link as="#">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </li>
          <li className="text-sm text-gray-2 mx-6">
            <Link as="#">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </li>
          <li className="text-sm text-gray-2">
            <Link as="#">
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
          </li>
        </ul>
      </nav>
      {/* Mobile Nav Menu view */}
      <nav className="block sticky top-0 bg-black sm:hidden">
        <section className="flex justify-between items-center py-2 px-4">
          <Link to="/">
            <h1 className="text-xl text-white">Muzamil Hussain</h1>
          </Link>
          <div>
            <ul className="inline-flex mr-6">
              <li className="text-sm text-gray-2">
                <Link as="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </li>
              <li className="text-sm text-gray-2 mx-3">
                <Link as="#">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </li>
              <li className="text-sm text-gray-2">
                <Link as="#">
                  <FontAwesomeIcon icon={faXTwitter} />
                </Link>
              </li>
            </ul>
            <button
              className="text-white"
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              <FontAwesomeIcon icon={openMenu ? faBars : faXmark} />
            </button>
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
                <Link to={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default Header;
