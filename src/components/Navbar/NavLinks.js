import React from "react";
import { HashLink } from "react-router-hash-link";

const NavLinks = ({ scrolled }) => {
  return (
    <>
      <HashLink
        className={`px-4 font-extrabold transition duration-300 ease-in-out ${
          scrolled
            ? "text-gray-900 hover:text-primary"
            : "text-gray-200 hover:text-primary"
        }`}
        smooth
        to="/#about"
      >
        About
      </HashLink>
      <HashLink
        className={`px-4 font-extrabold transition duration-300 ease-in-out ${
          scrolled
            ? "text-gray-900 hover:text-primary"
            : "text-gray-200 hover:text-primary"
        }`}
        smooth
        to="/#services"
      >
        Services
      </HashLink>
      <HashLink
        className={`px-4 font-extrabold transition duration-300 ease-in-out ${
          scrolled
            ? "text-gray-900 hover:text-primary"
            : "text-gray-200 hover:text-primary"
        }`}
        to="/"
      >
        Portfolio
      </HashLink>
      <HashLink
        className={`px-4 font-extrabold transition duration-300 ease-in-out ${
          scrolled
            ? "text-gray-900 hover:text-primary"
            : "text-gray-200 hover:text-primary"
        }`}
        to="/contact#contact"
      >
        Contact Us
      </HashLink>
      <HashLink
        className="text-white bg-primary inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl hover:bg-opacity-90 transition duration-300 ease-in-out"
        smooth
        to="/get-demo#demo"
      >
        Demo our products
      </HashLink>
    </>
  );
};

export default NavLinks;
