import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const DetailRow = ({ label, children, last }) => (
  <li className={last ? "py-3" : "py-3 border-b border-slate-400"}>
    <span className="text-gray-100">{label}: &nbsp;</span>
    <span className="text-slate-300 font-normal">{children}</span>
  </li>
);

// Content of the portfolio modal. Give it `key={project.id}` so the image
// carousel resets when switching projects.
const ProjectDetails = ({ project }) => {
  const { title, images, description, role, tech, date, client } = project;
  const { liveUrl, githubUrl } = project;
  const [imageIndex, setImageIndex] = useState(0);
  const hasMultipleImages = images.length > 1;

  const showImage = (step) =>
    setImageIndex((i) => (i + step + images.length) % images.length);

  const details = [
    { label: "Role", value: role },
    { label: "Technologies", value: tech.join(", ") },
    { label: "Date", value: date },
    client && { label: "Client", value: client },
  ].filter(Boolean);

  const carouselButtonClass =
    "absolute top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-slate text-white opacity-75 transition hover:opacity-100";

  return (
    <section className="text-white">
      <h1 className="text-2xl text-center mb-6 px-10">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="relative">
            <img
              className="w-full rounded-md"
              src={images[imageIndex]}
              alt={`${title} screenshot ${imageIndex + 1}`}
            />
            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  className={`${carouselButtonClass} left-2`}
                  onClick={() => showImage(-1)}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  className={`${carouselButtonClass} right-2`}
                  onClick={() => showImage(1)}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </>
            )}
          </div>
          {hasMultipleImages && (
            <p className="mt-2 text-center text-sm text-slate-300">
              {imageIndex + 1} / {images.length}
            </p>
          )}
        </div>
        <div className="font-semibold">
          <h2 className="mb-2 text-lg">Project Info:</h2>
          <p className="text-slate-300 font-normal">{description}</p>
          <h2 className="mt-6 mb-2 text-lg">Project Details:</h2>
          <ul>
            {details.map((detail, i) => (
              <DetailRow
                key={detail.label}
                label={detail.label}
                last={i === details.length - 1}
              >
                {detail.value}
              </DetailRow>
            ))}
          </ul>
          {(liveUrl || githubUrl) && (
            <div className="mt-6 flex flex-wrap gap-4">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border-2 border-green bg-green px-6 py-2 font-medium transition hover:border-green-100 hover:bg-green-100"
                >
                  Live demo
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="ml-2"
                  />
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border-2 border-green px-6 py-2 font-medium text-green transition hover:bg-green hover:text-white"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
