import React from "react";
import OwlCarousel from "react-owl-carousel";
import Rating from "./Rating";

const clientsData = [
  {
    imageURL: "/images/clients/1.jpg",
    name: "Jay Shah",
    tagLine: "Founder at Icomatic Pvt Ltd",
    description:
      "“I have used them twice now. Good rates, very efficient service and priced simply dummy text of the printing and typesetting industry quidam interesset his et. Excellent.”",
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

const responsiveLayout = {
  0: {
    items: 1,
  },
  992: {
    items: 2,
  },
};

const TestimonialCarousel = () => {
  return (
    <OwlCarousel
      className="owl-theme"
      loop
      margin={30}
      items={2}
      responsive={responsiveLayout}
    >
      {clientsData.map((item, i) => (
        <div className="item bg-black-100 p-12 rounded-md" key={i}>
          <div className="flex items-center mb-6">
            <img
              src={item.imageURL}
              alt="Client Pic"
              className="rounded-full !w-auto"
            />
            <div className="ml-4">
              <p className="font-semibold">{item.name}</p>
              <span className="font-medium text-slate-300">{item.tagLine}</span>
            </div>
          </div>
          <p className="mb-6">{item.description}</p>
          <Rating />
        </div>
      ))}
    </OwlCarousel>
  );
};

export default TestimonialCarousel;
