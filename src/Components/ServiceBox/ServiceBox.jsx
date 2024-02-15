import React from "react";
import {
  faBullhorn,
  faChartArea,
  faDesktop,
  faPaintBrush,
  faPalette,
  faPallet,
  faPenRuler,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceBox = ({ name, title, description }) => {
  let icon = null;

  switch (name) {
    case "graphic":
      icon = <FontAwesomeIcon icon={faPalette} />;
      break;
    case "web":
      icon = <FontAwesomeIcon icon={faDesktop} />;
      break;
    case "ui":
      icon = <FontAwesomeIcon icon={faPenRuler} />;
      break;
    case "app":
      icon = <FontAwesomeIcon icon={faPaintBrush} />;
      break;
    case "buisness":
      icon = <FontAwesomeIcon icon={faChartArea} />;
      break;
    case "seo":
      icon = <FontAwesomeIcon icon={faBullhorn} />;
      break;
    default:
      icon = null;
      break;
  }

  return (
    <section className="flex sm:basis-1/2 mb-12 px-4">
      <div className="flex justify-center item-center h-fit p-4 rounded bg-black-200 text-3xl text-green mr-4">
        {icon}
      </div>
      <div className="">
        <p className="text-xl font-medium mb-2.5">{title}</p>
        <span className="text-slate-300">{description}</span>
      </div>
    </section>
  );
};

export default ServiceBox;
