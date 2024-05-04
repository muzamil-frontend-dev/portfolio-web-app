import React from "react";
import Heading from "../Components/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFax,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

const Contact = () => {
  return (
    <section className="bg-gray-900 text-white" id="contact-us">
      <div className="container mx-auto py-18 px-8">
        <Heading title="contact" tagLine="get in touch" />
        <section className="grid grid-cols-1 gap-y-12 md:grid-cols-5 xl:gap-x-4">
          <article className="hidden md:block col-span-2 xl:col-span-1">
            <h2 className="text-xl font-medium uppercase mb-4">Address</h2>
            <p className="text-gray-100 mb-6">
              4th Floor, Plot No.22,
              <br /> 145 Murphy Canyon Rd.
              <br /> San Diego CA 2028
            </p>
            <div className="inline-block text-gray-100 mb-4">
              <p className="mb-1">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="text-green me-2"
                />
                (060) 444 434 444
              </p>
              <p className="mb-1">
                <FontAwesomeIcon icon={faFax} className="text-green me-2" />
                (060) 555 545 555
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-green me-2"
                />
                chat@simone.com
              </p>
            </div>
            <h2 className="text-xl font-medium uppercase mb-4">Follow Me</h2>
            <div className="text-gray-200">
              <a
                href="https://www.linkedin.com/in/muzamil167/"
                target="_blank"
                rel="noreferrer"
                className="me-1.5 hover:text-blue-100 transition-all"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://github.com/muzamil-frontend-dev"
                target="_blank"
                rel="noreferrer"
                className="mx-1.5 hover:text-black-300 transition-all"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.hackerrank.com/profile/hmuzamil567"
                target="_blank"
                rel="noreferrer"
                className="mx-1.5 hover:text-black transition-all"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </article>
          <article className="col-span-3 xl:col-span-4">
            <h2 className="text-xl font-medium uppercase mb-4">
              Send us a note
            </h2>
            <form className="grid grid-cols-2 gap-6">
              <input
                placeholder="Name"
                className="col-span-2 md:col-span-1 text-white p-3.5 bg-black-400 border rounded-md border-black-400 placeholder:text-white-200 focus:outline-none focus:ring-1 focus:ring-blue-200"
              />
              <input
                placeholder="Email"
                className="col-span-2 md:col-span-1 text-white p-3.5 bg-black-400 border rounded-md border-black-400 placeholder:text-white-200 focus:outline-none focus:ring-1 focus:ring-blue-200"
              />
              <textarea
                placeholder="Tell us more about your needs......"
                rows={5}
                className="col-span-2 text-white p-3.5 bg-black-400 border rounded-md border-black-400 placeholder:text-white-200 focus:outline-none focus:ring-1 focus:ring-blue-200"
              />
              <p className="col-span-2 text-center mt-0 mb-0">
                <button
                  type="submit"
                  className="text-center font-medium rounded-full py-3 px-10 transition-all duration-300 bg-green hover:bg-green-100 shadow-lg"
                >
                  Send Message
                </button>
              </p>
            </form>
          </article>
          <article className="block md:hidden col-span-1 text-center">
            <h2 className="text-xl font-medium uppercase mb-4">Address</h2>
            <p className="text-gray-100 mb-6">
              4th Floor, Plot No.22,
              <br /> 145 Murphy Canyon Rd.
              <br /> San Diego CA 2028
            </p>
            <div className="inline-block text-gray-100 mb-4">
              <p className="mb-1">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="text-green me-2"
                />
                (060) 444 434 444
              </p>
              <p className="mb-1">
                <FontAwesomeIcon icon={faFax} className="text-green me-2" />
                (060) 555 545 555
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-green me-2"
                />
                chat@simone.com
              </p>
            </div>
            <h2 className="text-xl font-medium uppercase mb-4">Follow Me</h2>
            <div className="text-gray-200">
              <a
                href="https://www.linkedin.com/in/muzamil167/"
                target="_blank"
                rel="noreferrer"
                className="me-1.5 hover:text-blue-100 transition-all"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://github.com/muzamil-frontend-dev"
                target="_blank"
                rel="noreferrer"
                className="mx-1.5 hover:text-black-300 transition-all"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.hackerrank.com/profile/hmuzamil567"
                target="_blank"
                rel="noreferrer"
                className="mx-1.5 hover:text-black transition-all"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};

export default Contact;
