import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Modal = () => {
  return (
    <section className="text-white">
      <h1 className="text-2xl text-center mb-6">Project Title 1</h1>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <img src="/images/portfolio/3.jpg" alt="" />
        </div>
        <div className="font-semibold">
          <h2 className="mb-2 text-lg">Project Info:</h2>
          <p className="text-slate-300 font-normal">
            Quidam lisque persius interesset his et, in quot quidam persequeris
            vim, ad mea essent possim iriure. Lisque persius interesset his et,
            in quot quidam persequeris vim, ad mea essent possim iriure.
          </p>
          <h2 className="mt-6 mb-2 text-lg">Project Details:</h2>
          <p className="py-3 border-b border-slate-400">
            <span className="text-gray-100">Client: &nbsp;</span>
            <span className="text-slate-300 font-normal">Jonn Cena</span>
          </p>
          <p className="py-3 border-b border-slate-400">
            <span className="text-gray-100">Industry: &nbsp;</span>
            <span className="text-slate-300 font-normal">Puzzle Game</span>
          </p>
          <p className="py-3 border-b border-slate-400">
            <span className="text-gray-100">Technologies: &nbsp;</span>
            <span className="text-slate-300 font-normal">
              IOS, HTML5, CSS3, PHP, Java
            </span>
          </p>
          <p className="py-3 border-b border-slate-400">
            <span className="text-gray-100">Date: &nbsp;</span>
            <span className="text-slate-300 font-normal">
              {new Date().toLocaleDateString()}
            </span>
          </p>
          <p className="py-3 border-b border-slate-400">
            <span className="text-gray-100">URL: &nbsp;</span>
            <a href="www.example.com" className="text-green font-normal">
              www.example.com
            </a>
          </p>
          <p className="py-3">
            <span className="text-gray-100">Share: &nbsp;</span>
            <div className="inline-flex space-x-3">
              <a
                href="www.facebook.com"
                className="text-slate-300 hover:text-blue-600"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="www.twitter.com"
                className="text-slate-300 hover:text-blue-300"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="www.google.com"
                className="text-slate-300 hover:text-red-100"
              >
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a
                href="www.instagram.com"
                className="text-slate-300 hover:text-blue-400"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="www.email.com"
                className="text-slate-300 hover:text-blue-500"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Modal;
