import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Generic modal rendered into document.body.
 * Mount it only while open. Closes on the X button, Escape and backdrop click,
 * and locks page scroll while mounted. Pass `onPrev` / `onNext` to show side
 * arrows that also respond to the left/right arrow keys.
 */
const Modal = ({ onClose, onPrev, onNext, label, children }) => {
  const closeButtonRef = useRef(null);

  // Lock page scroll and manage focus for as long as the modal is mounted.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft" && onPrev) onPrev();
      else if (e.key === "ArrowRight" && onNext) onNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const arrowClass =
    "fixed top-1/2 -translate-y-1/2 z-10 h-12 w-12 text-2xl text-white opacity-65 transition hover:opacity-100";

  return createPortal(
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate"
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={handleBackdropClick}
    >
      {onPrev && (
        <button
          type="button"
          aria-label="Previous"
          className={`${arrowClass} left-1 md:left-4`}
          onClick={onPrev}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}
      {onNext && (
        <button
          type="button"
          aria-label="Next"
          className={`${arrowClass} right-1 md:right-4`}
          onClick={onNext}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}
      <div
        className="min-h-screen py-10 px-12 md:px-20 flex items-center justify-center w-full"
        onClick={handleBackdropClick}
      >
        <div className="relative w-full max-w-6xl bg-black-200 p-6 md:p-8 shadow-lg">
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close"
            className="absolute top-2 right-2 h-11 w-11 text-lg text-white opacity-65 transition hover:opacity-100"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
