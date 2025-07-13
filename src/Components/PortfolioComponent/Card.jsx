import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PortfolioModal from "./Modal";

const Card = ({ image }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    }
  }, [showModal]);

  const handleClick = () => {
    setShowModal(true);
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
          <img className="object-cover rounded-md" src={image} alt="img 1" />
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
          <div className="fixed inset-0 flex items-center justify-center bg-slate bg-opacity-50 z-50">
            <div className="bg-black-200 p-6 rounded-lg shadow-lg">
              <button
                className="absolute top-0 right-0 h-11 w-11 text-lg text-white opacity-65 transition hover:opacity-1"
                onClick={handleCloseModal}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <PortfolioModal />
            </div>
          </div>,
          document.body
        )}
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        className="relative container p-7 bg-black-200"
        overlayClassName="fixed inset-x-10 top-10 bottom-0 bg-slate overflow-y-scroll"
        ariaHideApp={false}
      >
        <button
          className="absolute top-0 right-0 h-11 w-11 text-lg text-white opacity-65 transition hover:opacity-1"
          onClick={handleCloseModal}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <PortfolioModal />
      </Modal> */}
    </>
  );
};

export default Card;
