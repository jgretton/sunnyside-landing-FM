import React from "react";

import { Header } from "../components/Header";

export const Hero = () => {
  return (
    <section class="bg-[url('./images/mobile/image-header.jpg')] md:bg-[url('./images/desktop/image-header.jpg')] bg-cover bg-no-repeat bg-bottom h-[550px] md:h-5/6">
      <Header />
      <div class="">
        <p className="text-5xl md:text-7xl uppercase text-white text-center mt-14 md:mt-28 font-fraunces tracking-widest leading-tight">
          We are creatives
        </p>
      </div>
      <div className=" flex justify-center mt-10 md:mt-28">
        <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
          <g
            stroke="#FFF"
            stroke-width="6"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 3v100M3 95.484l15 15 15-15" />
          </g>
        </svg>
      </div>
    </section>
  );
};
