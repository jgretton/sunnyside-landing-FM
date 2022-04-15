import React from "react";
import MilkBottle from "../images/desktop/image-gallery-milkbottles.jpg";
import Cone from "../images/desktop/image-gallery-cone.jpg";
import Orange from "../images/desktop/image-gallery-orange.jpg";
import SugarCubes from "../images/desktop/image-gallery-sugarcubes.jpg";

export const Gallery = () => {
  return (
    <div className="w-full flex flex-row flex-wrap h-auto">
      <img
        src={MilkBottle}
        alt="Milk Botßtles"
        className="max-h-96 w-1/2 lg:w-1/4 object-cover "
      />
      <img
        src={Orange}
        alt="Orange"
        className="max-h-96 w-1/2 lg:w-1/4 object-cover"
      />
      <img
        src={Cone}
        alt="ice cream cone"
        className="max-h-96 w-1/2 lg:w-1/4 object-cover"
      />
      <img
        src={SugarCubes}
        alt="pile of sugarcubes"
        className="max-h-96 w-1/2 lg:w-1/4 object-cover"
      />
    </div>
  );
};
