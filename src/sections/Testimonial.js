import React from "react";
import { TestimonalCard } from "../components/TestimonalCard";
import Emily from "../images/image-emily.jpg";
import Jennie from "../images/image-jennie.jpg";
import Thomas from "../images/image-thomas.jpg";

export const Testimonial = () => {
  return (
    <section className="md:my-36 my-20">
      <h3 className="text-gray-400 uppercase text-center tracking-widest text-xl font-fraunces">
        Client testimonials
      </h3>
      <div className="flex flex-col max-w-lg m-auto md:flex-row md:max-w-7xl">
        <TestimonalCard
          avatar={Emily}
          text="We put our trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit."
          name="Emily R."
          position="Marketing Director"
        />
        <TestimonalCard
          avatar={Thomas}
          text="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
        success made it a satisfying and enjoyable experience."
          name="Thomas S."
          position="Chief Operating Officer"
        />
        <TestimonalCard
          avatar={Jennie}
          text="Incredible end result! Our sales increased over 400% when we worked
        with Sunnyside. Highly recommended!"
          name="Jennie F."
          position="Business Owner"
        />
      </div>
    </section>
  );
};
