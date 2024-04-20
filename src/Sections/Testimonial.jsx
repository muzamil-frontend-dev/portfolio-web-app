import React from "react";
import Heading from "../Components/Heading";
import TestimonialCarousel from "../Components/TestimonialCarousel";

const Testimonial = () => {
  return (
    <section className="bg-black-200 text-white" id="testimonial">
      <div className="container mx-auto py-18 px-8">
        <Heading title={"testimonial"} tagLine={"Client Speak"} />
        {/* Testimonials Slider */}
        <section>
          <TestimonialCarousel />
        </section>
      </div>
    </section>
  );
};

export default Testimonial;
