import React from "react";

export const TestimonalCard = ({ avatar, text, name, position }) => {
  return (
    <div class="text-center flex flex-col mt-14 max-w-md m-auto">
      <div class="self-center mt-5">
        <img src={avatar} alt="" className="h-20 w-20 rounded-full" />
      </div>
      <p className="px-10 text-lg text-gray-700 mt-8 md:mt-12">{text}</p>

      <p className="font-extrabold text-lg font-fraunces mt-8 md:mt-12">
        {name}
      </p>
      <p className="text-gray-400 mt-1">{position}</p>
    </div>
  );
};
