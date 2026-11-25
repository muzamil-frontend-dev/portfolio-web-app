import React, { useState } from "react";
import Heading from "../Components/Heading";
import SocialLinks from "../Components/SocialLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { profile } from "../data/profile";

// Set REACT_APP_FORMSPREE_ID in .env locally and in the Vercel project's
// environment variables (see .env.example).
const FORMSPREE_ID = process.env.REACT_APP_FORMSPREE_ID;

const emptyForm = { name: "", email: "", message: "" };

const inputClasses =
  "text-white p-3 bg-black-400 border rounded-md border-black-400 placeholder:text-white-200 focus:outline-none focus:ring-1 focus:ring-blue-200";

const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  // idle | sending | success | error
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!FORMSPREE_ID) {
      console.error("REACT_APP_FORMSPREE_ID is not set.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error(`Formspree: ${response.status}`);
      setForm(emptyForm);
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const isSending = status === "sending";

  return (
    <section className="bg-black-200 text-white" id="contact-us">
      <div className="container mx-auto py-18 px-8">
        <Heading title="contact" tagLine="get in touch" />
        <section className="grid grid-cols-1 gap-y-12 md:grid-cols-6 md:gap-x-8">
          <article className="order-2 md:order-1 md:col-span-2 text-center md:text-left">
            <h2 className="text-xl font-medium uppercase mb-4">Address</h2>
            <p className="text-gray-100 mb-6">
              Sehar Road Baghbanpura <br /> {profile.location}
            </p>
            <div className="inline-block text-left text-gray-100 mb-4">
              <p className="mb-1">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="text-green me-2"
                />
                <a href={profile.phoneHref} className="hover:text-green">
                  {profile.phone}
                </a>
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-green me-2"
                />
                <a href={`mailto:${profile.email}`} className="hover:text-green">
                  {profile.email}
                </a>
              </p>
            </div>
            <h2 className="text-xl font-medium uppercase mb-4">Follow Me</h2>
            <SocialLinks
              colorOnHover
              className="flex justify-center md:justify-start gap-5 text-xl text-gray-200"
            />
          </article>
          <article className="order-1 md:order-2 md:col-span-4">
            <h2 className="text-xl font-medium uppercase mb-4">
              Send us a note
            </h2>
            <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <input
                name="name"
                aria-label="Name"
                placeholder="Name"
                required
                value={form.name}
                onChange={handleChange}
                className={`col-span-2 md:col-span-1 ${inputClasses}`}
              />
              <input
                name="email"
                type="email"
                aria-label="Email"
                placeholder="Email"
                required
                value={form.email}
                onChange={handleChange}
                className={`col-span-2 md:col-span-1 ${inputClasses}`}
              />
              <textarea
                name="message"
                aria-label="Message"
                placeholder="Tell us more about your needs......"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className={`col-span-2 ${inputClasses}`}
              />
              <div className="col-span-2 text-center">
                <button
                  type="submit"
                  disabled={isSending}
                  className="text-center font-medium rounded-full py-3 px-10 transition-all duration-300 bg-green hover:bg-green-100 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSending ? "Sending…" : "Send Message"}
                </button>
                <p role="status" aria-live="polite" className="mt-4 min-h-6">
                  {status === "success" && (
                    <span className="text-green">
                      Thanks for reaching out! I'll get back to you soon.
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-red">
                      Sorry, your message couldn't be sent. Please try again or
                      email me at {profile.email}.
                    </span>
                  )}
                </p>
              </div>
            </form>
          </article>
        </section>
      </div>
    </section>
  );
};

export default Contact;
