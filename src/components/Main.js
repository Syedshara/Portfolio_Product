import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import { companyName } from "../utilities/Constants";
import img from "../images/web-dev.svg";
const Main = () => {
  return (
    <div className=" bg-gradient-to-br from-black/90  via-slate-800 to-black/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-green-900/10 to-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-green-400/20 via-transparent to-gray-900/40"></div>

      {/* Subtle green glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-400/5 rounded-full blur-3xl"></div>
      <div className="relative z-10 text-white">
        <div className="hero" id="hero">
          <div>
            <NavBar />
          </div>

          <div
            className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6"
            data-aos="zoom-in"
          >
            <div
              id="hero"
              className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left"
            >
              <div
                className="lg:w-1/2 flex flex-col justify-center"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <h1 className="mb-5 md:text-5xl text-3xl font-bold text-primary tracking-tight">
                  {/* We build digital solutions to help businesses scale */}
                  Effortless Ordering, Powered by AI
                </h1>
                <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
                  Welcome to {companyName}: Your Smart Ordering Solution on
                  WhatsApp
                </div>
                <div className="mb-10 space-x-0 md:space-x-2 md:mb-16">
                  <Link
                    to="/contact"
                    className="text-white bg-primary inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>

              <div
                className="flex lg:justify-end w-full lg:w-1/2"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <img
                  alt="card img"
                  className="rounded-t float-right duration-1000 w-full"
                  // style={{ height: "450px", width: "auto" }}
                  // src="/images/landing_image.jpg"
                  src={img}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
