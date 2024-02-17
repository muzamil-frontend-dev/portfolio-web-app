import React from "react";

const SkillBox = ({ name, progress }) => {
  return (
    <section className="mb-3">
      <div className="flex justify-between mb-2 text-gray-100 font-medium">
        <p>{name}</p>
        <span>{progress}</span>
      </div>
      <div className="rounded-full h-2 bg-black-100">
        <div
          className="rounded-l-full h-2 bg-green"
          style={{ width: progress }}
        />
      </div>
    </section>
  );
};

export default SkillBox;
