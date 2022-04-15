import React from "react";

export const Main = () => {
  return (
    <section className="flex flex-row flex-wrap">
      <div className="bg-[url('./images/mobile/image-transform.jpg')] w-screen h-96 bg-cover bg-no-repeat bg-center md:w-1/2 md:my-0 md:h-[600px] order-1 md:order-2 md:bg-[url('./images/desktop/image-transform.jpg')]"></div>
      <div className="text-center px-10 my-16 md:w-1/2 md:my-0 md:h-[600px] order-2 md:order-1 md:text-left flex flex-col justify-center ">
        <div className="md:max-w-md m-auto">
          <h3 className="text-4xl font-fraunces font-bold mb-10">
            Transform your brand
          </h3>
          <p className="text-lg text-gray-700 mb-10">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>

          <a
            href="/"
            className="uppercase font-fraunces relative font-bold text-lg after:absolute after:-bottom-1 after:right-1/2 after:transform after:translate-x-1/2 after:h-1/2 hover:after:bg-Yellow after:w-[115%]  after:rounded after:-z-10 md:self-start self-center"
          >
            Learn more
          </a>
        </div>
      </div>

      <div className="bg-[url('./images/mobile/image-stand-out.jpg')] w-screen h-96 bg-cover bg-no-repeat bg-center md:w-1/2 md:my-0 md:h-[600px] order-3 md:bg-[url('./images/desktop/image-stand-out.jpg')]"></div>

      <div className="text-center px-10 my-16 md:w-1/2 md:my-0 md:h-[600px] order-4 md:text-left flex flex-col justify-center ">
        <div className="md:max-w-md m-auto">
          <h3 className="text-4xl font-fraunces font-bold mb-10">
            Stand out to the right audience
          </h3>
          <p className="text-lg text-gray-700 mb-10">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>

          <a
            href="/"
            className="uppercase font-fraunces relative font-bold text-lg after:absolute after:-bottom-1 after:right-1/2 after:transform after:translate-x-1/2 after:h-1/2 hover:after:bg-SoftRed after:w-[110%]  after:rounded after:-z-10 md:self-start self-center"
          >
            Learn more
          </a>
        </div>
      </div>

      <div className="text-center w-screen bg-[url('./images/mobile/image-graphic-design.jpg')] h-[600px] bg-no-repeat bg-center bg-cover relative md:w-1/2 md:my-0 md:h-[600px] order-5 flex flex-col justify-center  md:bg-[url('./images/desktop/image-graphic-design.jpg')]">
        <div className=" absolute bottom-0 px-3 py-4 md:px-0 left-1/2 transform -translate-x-1/2">
          <h3 className="text-4xl  font-fraunces font-bold mb-10 text-DarkDesCyan">
            Graphic design
          </h3>

          <p className="text-lg text-gray-700 mb-10 w-96 ">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>

      <div className="text-center w-screen bg-[url('./images/mobile/image-photography.jpg')] h-[600px] bg-no-repeat bg-center bg-cover relative md:w-1/2 md:my-0 md:h-[600px] order-6 flex flex-col justify-center  md:bg-[url('./images/desktop/image-photography.jpg')]">
        <div className=" absolute bottom-0 px-3 py-4 md:px-0 left-1/2 transform -translate-x-1/2">
          <h3 className="text-4xl  font-fraunces font-bold mb-10 text-DarkBlue">
            Photography
          </h3>

          <p className="text-lg text-gray-700 mb-10 w-96 ">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
};
