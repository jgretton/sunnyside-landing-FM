import React from "react";
import { Footer } from "./sections/Footer";
import { Gallery } from "./sections/Gallery";
import { Hero } from "./sections/Hero";
import { Main } from "./sections/Main";
import { Testimonial } from "./sections/Testimonial";
function App() {
  return (
    <div className="App h-screen font-barlow">
      <Hero />
      <Main />
      <Testimonial />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
