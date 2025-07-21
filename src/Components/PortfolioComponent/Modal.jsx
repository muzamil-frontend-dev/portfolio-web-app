import React from "react";

const Modal = () => {
  return (
    <section className="text-white">
      <h1 className="text-2xl text-center mb-6">Project Title 1</h1>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <img src="/images/portfolio/3.jpg" alt="" />
        </div>
        <div className="font-semibold">
          <h2 className="mb-2 text-lg">Project Info:</h2>
          <p className="text-slate-300 font-normal">
            Quidam lisque persius interesset his et, in quot quidam persequeris
            vim, ad mea essent possim iriure. Lisque persius interesset his et,
            in quot quidam persequeris vim, ad mea essent possim iriure.
          </p>
          <h2 className="mt-6 mb-2 text-lg">Project Details:</h2>
          <p className="py-3 border-b border-slate-400">
            Client:{" "}
            <span className="text-slate-300 font-normal">Jonn Cena</span>
          </p>
          <p className="py-3 border-b border-slate-400">
            Industry:{" "}
            <span className="text-slate-300 font-normal">Puzzle Game</span>
          </p>
          <p className="py-3 border-b border-slate-400">
            Technologies:{" "}
            <span className="text-slate-300 font-normal">
              IOS, HTML5, CSS3, PHP, Java
            </span>
          </p>
          <p className="py-3 border-b border-slate-400">
            Date:{" "}
            <span className="text-slate-300 font-normal">
              {new Date().toLocaleDateString()}
            </span>
          </p>
          <p className="py-3 border-b border-slate-400">
            URL: <span className="text-slate-300">www.example.com</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Modal;
