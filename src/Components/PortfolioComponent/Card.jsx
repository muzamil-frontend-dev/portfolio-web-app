import React from "react";

// Grid item. Isotope positions these absolutely and filters them by
// `data-category`, so the width/padding classes here define the columns and
// gutter (mirrors the reference's `col-sm-6 col-lg-4` + `g-4`).
const Card = ({ project, categoryLabel, onClick }) => {
  return (
    <li
      className="portfolio-item w-full sm:w-1/2 lg:w-1/3 px-3 pb-6"
      data-category={project.category}
    >
      <button
        type="button"
        className="group/overlay relative block w-full rounded-md overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-green"
        onClick={onClick}
        aria-label={`Open ${project.title}`}
      >
        <img
          className="w-full aspect-[4/3] object-cover rounded-md"
          src={project.thumbnail}
          alt={project.title}
        />
        <div
          className="invisible opacity-0 absolute inset-0 bg-slate rounded-md transition-opacity duration-300
          group-hover/overlay:visible group-hover/overlay:opacity-100 group-hover/overlay:backdrop-blur-xs
          group-focus-visible/overlay:visible group-focus-visible/overlay:opacity-100"
        >
          <div className="flex justify-center items-center flex-col h-full">
            <p className="text-lg font-medium">{project.title}</p>
            <span className="text-slate-300">{categoryLabel}</span>
          </div>
        </div>
      </button>
    </li>
  );
};

export default Card;
