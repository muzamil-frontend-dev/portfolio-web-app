import React from "react";

const Footer = () => {
  return (
    <section className="bg-black-200 text-slate-500" id="contact-us">
      <div className="container mx-auto py-16 px-8">
        <div className="md:grid md:grid-cols-2 text-center">
          <p className="mb-4 md:mb-0">
            Copyight &#169; 2022{" "}
            <span className="font-medium text-green">Muzamil</span>. All Rights
            Reserved.
          </p>
          <ul className="flex justify-center md:justify-end font-medium">
            <li className="pe-3">Terms & Policy</li>
            <li className="relative ps-3 before:content-[''] before:absolute before:top-2/4 before:left-0 before:-translate-y-2/4 before:h-3.5 before:w-px before:bg-slate-600">
              Disclaimer
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
