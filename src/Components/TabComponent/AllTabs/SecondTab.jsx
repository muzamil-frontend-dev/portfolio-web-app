import React from "react";

const SecondTab = () => {
  return (
    <div class="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-8">
      <div class="h-min w-full bg-blue-400">
        <img
          class="object-cover"
          src="https://source.unsplash.com/random/?city"
          alt="city"
        />
      </div>
    </div>
  );
};

export default SecondTab;
