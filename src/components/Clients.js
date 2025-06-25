import React from "react";
import kws from "../images/clients/kws.png";
import geps from "../images/clients/geps.png";
import protergia from "../images/clients/protergia.png";

const Clients = () => {
  return (
    <div className="py-20 relative z-0">
      {" "}
      {/* Added z-0 here to establish stacking context */}
      <section data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Clients
              </span>
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 rounded-full"></div>
            </div>
            <h2 className="text-xl lg:text-2xl font-medium text-gray-600 max-w-md mx-auto">
              Some of our clients.
            </h2>
          </div>

          <div className="relative" data-aos="fade-in" data-aos-delay="600">
            {/* Floating background shapes - reduced z-index */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-green-100 rounded-full opacity-20 animate-pulse"></div>
              <div
                className="absolute top-32 right-20 w-24 h-24 bg-emerald-100 rounded-full opacity-30 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-20 left-32 w-20 h-20 bg-teal-100 rounded-full opacity-25 animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>

            <div className="relative z-10 flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
                {/* Client cards remain the same */}
                {/* Client 1 */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
                  <div className="relative bg-white rounded-3xl p-12 shadow-lg group-hover:shadow-2xl transition-all duration-500 border-2 border-transparent group-hover:border-green-200 transform group-hover:-translate-y-3 group-hover:rotate-1">
                    <div className="flex justify-center items-center h-32">
                      <img
                        src={kws}
                        alt="client"
                        className="max-h-20 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 rotate-45"></div>
                  </div>
                </div>

                {/* Client 2 */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
                  <div className="relative bg-white rounded-3xl p-12 shadow-lg group-hover:shadow-2xl transition-all duration-500 border-2 border-transparent group-hover:border-emerald-200 transform group-hover:-translate-y-3 group-hover:-rotate-1">
                    <div className="flex justify-center items-center h-32">
                      <img
                        src={geps}
                        alt="client"
                        className="max-h-20 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 rotate-45"></div>
                  </div>
                </div>

                {/* Client 3 */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
                  <div className="relative bg-white rounded-3xl p-12 shadow-lg group-hover:shadow-2xl transition-all duration-500 border-2 border-transparent group-hover:border-teal-200 transform group-hover:-translate-y-3 group-hover:rotate-1">
                    <div className="flex justify-center items-center h-32">
                      <img
                        src={protergia}
                        alt="client"
                        className="max-h-20 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting lines animation - reduced z-index */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
              <svg
                className="w-full h-full max-w-4xl opacity-10"
                viewBox="0 0 800 200"
              >
                <path
                  d="M100 100 Q400 50 700 100"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#059669" />
                    <stop offset="100%" stopColor="#0d9488" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
