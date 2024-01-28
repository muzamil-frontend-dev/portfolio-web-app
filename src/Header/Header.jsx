import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(() => {
    return true;
  });
  return (
    <header className="bg-white shadow-md">
      <nav className="mx-auto max-w-7xl items-center justify-between py-4 px-8 hidden sm:flex">
        <div className="flex flex-1">
          {/* Logo */}
          <a href="#">
            <img className="w-8 h-8" src="images/logo.png" alt="web logo" />
          </a>
        </div>
        {/* Menu Items */}
        <div className="flex-auto">
          <a href="#" className="mx-6 font-medium">
            Home
          </a>
          <a href="#" className="mx-6 font-medium">
            About
          </a>
          <a href="#" className="mx-6 font-medium">
            Projects
          </a>
          <a href="#" className="mx-6 font-medium">
            Blog
          </a>
          <a href="#" className="mx-6 font-medium">
            Contact
          </a>
        </div>
        {/* Social Icons */}
        <div className="flex flex-1 justify-end">
          <a
            href="https://www.linkedin.com/in/muzamil167/"
            target="_blank"
            rel="noreferrer"
            className="mr-3"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="https://twitter.com/Mernstack_dev"
            target="_blank"
            rel="noreferrer"
            className="mr-3"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://github.com/muzamil-frontend-dev"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </nav>
      {/* Mobile header menu */}
      <nav className="flex max-w-2xl items-center justify-between p-3 px-4 sm:hidden">
        <div className="flex flex-1">
          {/* Logo */}
          <a href="#">
            <img className="w-8 h-8" src="images/logo.png" alt="" />
          </a>
        </div>
        <button
          className="flex flex-auto justify-end"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        {/* Toggle Menu */}
        <section
          className={
            !openMenu
              ? "hidden"
              : "block bg-white absolute top-0 left-0 bottom-0 w-full p-4"
          }
        >
          <div className="flex justify-between pb-2">
            {/* Logo */}
            <a href="#">
              <img
                className="w-8 h-8"
                src="images/logo.png"
                alt="website logo"
              />
            </a>
            <button
              className="text-xl"
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <hr className="my-2" />
          {/* Menu Items */}
          <div className="text-left pb-2">
            <a href="#" className="block py-2">
              Home
            </a>
            <a href="#" className="block py-2">
              About
            </a>
            <a href="#" className="block py-2">
              Projects
            </a>
            <a href="#" className="block py-2">
              Blog
            </a>
            <a href="#" className="block py-2">
              Contact
            </a>
          </div>
          <hr className="my-2" />
          {/* Social Icons */}
          <div className="text-left pb-2">
            <h2 className="py-2 font-medium">Links:</h2>
            <a
              href="https://www.linkedin.com/in/muzamil167/"
              target="_blank"
              rel="noreferrer"
              className="mr-4"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://twitter.com/Mernstack_dev"
              target="_blank"
              rel="noreferrer"
              className="mr-4"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://github.com/muzamil-frontend-dev"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Header;
