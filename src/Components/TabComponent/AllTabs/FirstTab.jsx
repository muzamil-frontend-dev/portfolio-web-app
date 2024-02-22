import React from "react";

const FirstTab = () => {
  return (
    <div class="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-8">
      <div class="h-min w-full bg-red-400">
        <img
          class="object-cover"
          src="https://source.unsplash.com/random/700x400/?subway"
          alt="subway"
        />
      </div>
    </div>
  );
};

export default FirstTab;
