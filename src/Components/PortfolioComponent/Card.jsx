import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PortfolioModal from "./Modal";

const Card = ({ image }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    }
  }, [modalIsOpen]);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        className="absolute inset-10 h-max h bg-black-200 p-7 container mx-auto"
        overlayClassName="fixed inset-0 bg-slate overflow-y-scroll"
        ariaHideApp={false}
      >
        <button
          className="absolute top-0 right-0 h-11 w-11 text-lg text-white opacity-65 transition hover:opacity-100"
          onClick={handleCloseModal}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <PortfolioModal />
      </Modal>
    </>
  );
};

export default Card;
