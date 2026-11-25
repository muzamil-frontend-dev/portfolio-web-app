import React, { useState } from "react";
import Modal from "../Components/Modal";
import { legalDocs } from "../data/legal";

const Footer = () => {
  const [openDocId, setOpenDocId] = useState(null);
  const openDoc = legalDocs.find((doc) => doc.id === openDocId);

  return (
    <footer className="bg-gray-900 text-slate-500">
      <div className="container mx-auto py-12 px-8 md:pe-20 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        <p>
          Copyright &#169; {new Date().getFullYear()}{" "}
          <span className="font-medium text-green">Muzamil</span>. All Rights
          Reserved.
        </p>
        <ul className="flex font-medium">
          {legalDocs.map((doc, i) => (
            <li
              key={doc.id}
              className={
                i > 0
                  ? "relative ps-3 before:content-[''] before:absolute before:top-2/4 before:left-0 before:-translate-y-2/4 before:h-3.5 before:w-px before:bg-slate-600"
                  : "pe-3"
              }
            >
              <button
                type="button"
                className="transition-colors hover:text-green"
                onClick={() => setOpenDocId(doc.id)}
              >
                {doc.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {openDoc && (
        <Modal
          label={openDoc.label}
          maxWidth="max-w-3xl"
          onClose={() => setOpenDocId(null)}
        >
          <article className="text-white">
            <h1 className="text-2xl mb-6 pr-10">{openDoc.label}</h1>
            {openDoc.sections.map((section) => (
              <section key={section.heading} className="mb-6 last:mb-0">
                <h2 className="text-lg font-semibold mb-2">
                  {section.heading}
                </h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-slate-300 mb-3 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </article>
        </Modal>
      )}
    </footer>
  );
};

export default Footer;
