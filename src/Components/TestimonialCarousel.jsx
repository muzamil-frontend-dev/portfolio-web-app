import React from "react";
import OwlCarousel from "react-owl-carousel";
import Rating from "./Rating";

const clientsData = [
  {
    imageURL: "/images/clients/1.jpg",
    name: "Jay Shah",
    tagLine: "Founder at Icomatic Pvt Ltd",
    description:
      "Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.",
  },
  {
    imageURL: "/images/clients/1.jpg",
    name: "Jay Shah",
    tagLine: "Founder at Icomatic Pvt Ltd",
    description:
      "Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.",
  },
  {
    imageURL: "/images/clients/1.jpg",
    name: "Jay Shah",
    tagLine: "Founder at Icomatic Pvt Ltd",
    description:
      "Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.",
  },
  {
    imageURL: "/images/clients/1.jpg",
    name: "Jay Shah",
    tagLine: "Founder at Icomatic Pvt Ltd",
    description:
      "Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.",
  },
];

const TestimonialCarousel = () => {
  return (
    <OwlCarousel className="owl-theme" loop margin={40} items={2}>
      {clientsData.map((item) => (
        <div className="item bg-black-100 p-12 rounded-md">
          <div className="flex items-center mb-6">
            <img
              src="/images/clients/1.jpg"
              alt="Client Pic"
              className="rounded-full !w-auto"
            />
            <div className="ml-4">
              <p>Jay Shah</p>
              <span>Founder at Icomatic Pvt Ltd </span>
            </div>
          </div>
          <p className="mb-6">
            "Easy to use, reasonably priced simply dummy text of the printing
            and typesetting industry. Quidam lisque persius interesset his et,
            in quot quidam possim iriure.”
          </p>
          <Rating />
        </div>
      ))}
    </OwlCarousel>
  );
};

export default TestimonialCarousel;
