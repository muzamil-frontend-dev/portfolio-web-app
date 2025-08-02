import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const iconsList = {
  facebook: faFacebookF,
  twitter: faTwitter,
  google: faGoogle,
  instagram: faInstagram,
  Email: faEnvelope,
};

const Modal = ({ product }) => {
  return (
    <section className="text-white">
      <h1 className="text-2xl text-center mb-6">{product.title}</h1>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <img src={product.img} alt="" />
        </div>
        <div className="font-semibold">
          <h2 className="mb-2 text-lg">Project Info:</h2>
          <p className="text-slate-300 font-normal">{product.description}</p>
          <h2 className="mt-6 mb-2 text-lg">Project Details:</h2>
          <p className="py-3 border-b border-slate-400">
            <span className="text-gray-100">Client: &nbsp;</span>
            <span className="text-slate-300 font-normal">
              {product.clientName}
            </span>
          </p>
          <p className="py-3 border-b border-slate-400">
            <span className="text-gray-100">Industry: &nbsp;</span>
            <span className="text-slate-300 font-normal">
              {product.industry}
            </span>
          </p>
          <p className="py-3 border-b border-slate-400">
            <span className="text-gray-100">Technologies: &nbsp;</span>
            <span className="text-slate-300 font-normal">
              {product.technologies}
            </span>
          </p>
          <p className="py-3 border-b border-slate-400">
            <span className="text-gray-100">Date: &nbsp;</span>
            <span className="text-slate-300 font-normal">{product.date}</span>
          </p>
          <p className="py-3 border-b border-slate-400">
            <span className="text-gray-100">URL: &nbsp;</span>
            <a href="www.example.com" className="text-green font-normal">
              {product.productURL}
            </a>
          </p>
          <p className="py-3">
            <span className="text-gray-100 pe-4">Share:</span>
            <div className="inline-flex space-x-4">
              {product.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className={`text-slate-300 hover:${link.colorCode} transition-colors duration-300`}
                >
                  <FontAwesomeIcon icon={iconsList[link.icon]} />
                </a>
              ))}
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Modal;
