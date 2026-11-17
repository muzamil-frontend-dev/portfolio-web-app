import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceBox = ({ icon, title, description }) => {
  return (
    <article className="flex">
      <div className="flex shrink-0 items-center justify-center w-[70px] h-[70px] mr-5 rounded bg-black-200 shadow-sm text-3xl text-green">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        <h3 className="text-xl font-medium mb-2.5">{title}</h3>
        <p className="text-slate-300">{description}</p>
      </div>
    </article>
  );
};

export default ServiceBox;
