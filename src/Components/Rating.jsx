import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = () => {
  return (
    <div className="text-yellow text-sm">
      {Array.from({ length: 6 }).map((item) => (
        <FontAwesomeIcon icon={faStar} className="pr-px" />
      ))}
    </div>
  );
};

export default Rating;
