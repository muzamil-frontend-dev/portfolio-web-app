import React from "react";

const SummaryBox = ({ tenure, name, institute, description }) => {
  return (
    <div className="bg-black-100 rounded-md p-5 mb-6">
      <span className="bg-red rounded-md px-2 text-sm">{tenure}</span>
      <h1 className="text-xl font-medium mt-3 mb-2">{name}</h1>
      <h3 className="text-green mb-4">{institute}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
};

export default SummaryBox;
