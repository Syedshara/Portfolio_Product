import React from "react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const NavLinks = ({ scrolled }) => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  const baseLinkClass = `px-4 font-extrabold transition duration-300 ease-in-out`;

  const getTextColor = () => {
    if (scrolled) return "text-gray-900 hover:text-primary";
    if (isContactPage) return "text-black hover:text-primary";
    return "text-gray-200 hover:text-primary";
  };

  return (
    <>
      <HashLink
        className={`${baseLinkClass} ${getTextColor()}`}
        smooth
        to="/#about"
      >
        About
      </HashLink>
      <HashLink
        className={`${baseLinkClass} ${getTextColor()}`}
        smooth
        to="/#services"
      >
        Services
      </HashLink>
      <HashLink
        className={`${baseLinkClass} ${getTextColor()}`}
        smooth
        to="/#portfolio"
      >
        Products
      </HashLink>
      <HashLink
        className={`${baseLinkClass} ${getTextColor()}`}
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
