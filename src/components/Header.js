import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header class="flex flex-row justify-between items-center py-4 px-8 relative m-auto">
      <h1 class="text-white text-2xl">sunnyside</h1>

      <nav className="hidden md:flex flex-row items-center text-white">
        <a href="/" className="mr-8">
          About
        </a>
        <a href="/" className="mr-8">
          Services
        </a>
        <a href="/" className="mr-8">
          Projects
        </a>
        <a
          href="/"
          className="font-fraunces bg-white text-black rounded-full px-6 py-4 font-bold uppercase hover:bg-sky-300 hover:text-white"
        >
          Contact
        </a>
      </nav>

      {/* Mobile Menu */}
      <div className="block md:hidden">
        <FiMenu
          color="white"
          size={32}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {menuOpen ? (
          <nav className="absolute bg-white flex flex-col top-20 w-11/12 text-center py-10 left-1/2 transform -translate-x-1/2 ">
            {/* triangle for top right corner */}
            <div className="h-0 w-0 border-t-[22px] border-t-transparent border-b-[22px] border-b-transparent border-r-[22px] border-r-white absolute right-0 top-0 transform -translate-y-1/2"></div>

            <a href="/" className="text-gray-600 mb-6">
              About
            </a>
            <a href="/" className="text-gray-600 mb-6">
              Services
            </a>
            <a href="/" className="text-gray-600 mb-6">
              Projects
            </a>
            <a
              href="/"
              className="font-fraunces bg-yellow-300 text-black rounded-full px-6 py-4 font-bold uppercase self-center"
            >
              Contact
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  );
};
