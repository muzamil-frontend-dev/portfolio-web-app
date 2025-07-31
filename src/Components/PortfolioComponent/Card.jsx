import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PortfolioModal from "./Modal";

const Card = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section
        className="group/overlay relative h-min w-full bg-red-400 rounded-md"
        onClick={handleClick}
      >
        <div>
          <img
            className="object-cover rounded-md"
            src={product.img}
            alt="img 1"
          />
          <div
            className="invisible opacity-0 absolute inset-0 bg-slate rounded-md transition-opacity duration-300 group-hover/overlay:visible group-hover/overlay:opacity-100 
            group-hover/overlay:backdrop-blur-xs"
          >
            <div className="flex justify-center items-center flex-col h-full">
              <p>Project Title</p>
              <span>Category</span>
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      {showModal &&
        createPortal(
          <div className="fixed inset-0 flex items-start justify-center bg-slate bg-opacity-50 z-50 overflow-y-auto">
            <div className="min-h-screen py-10 px-4 flex items-center justify-center w-full">
              <div className="relative w-full max-w-6xl bg-black-200 p-6 shadow-lg">
                <button
                  className="absolute top-2 right-2 h-11 w-11 text-lg text-white opacity-65 transition hover:opacity-1"
                  onClick={handleCloseModal}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
                <PortfolioModal product={product} />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Card;
