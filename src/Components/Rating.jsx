import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = () => {
  return (
    <div className="text-yellow text-sm">
      {Array.from({ length: 6 }).map((item, i) => (
        <FontAwesomeIcon icon={faStar} className="pr-px" key={i} />
      ))}
    </div>
  );
};

export default Rating;
