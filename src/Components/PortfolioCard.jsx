import React from "react";

const PortfolioCard = ({ image }) => {
  return (
    <div className="group/overlay relative h-min w-full bg-red-400 rounded-md">
      <img className="object-cover rounded-md" src={image} alt="img 1" />
      <div className="invisible opacity-0 absolute inset-0 bg-slate rounded-md transition-opacity duration-300 group-hover/overlay:visible group-hover/overlay:opacity-100">
        <div className="flex justify-center items-center flex-col h-full">
          <p>Project Title</p>
          <span>Category</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
