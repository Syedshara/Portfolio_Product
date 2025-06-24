import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "We specialize in creating and optimizing high-quality, custom websites for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use websites and applications for clients.",
      icon: (
        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
      ),
      gradient: "from-green-500 to-emerald-600",
      border: "border-green-100 hover:border-green-300",
      highlight: "group-hover:text-green-600",
      line: "from-green-400 to-emerald-500",
    },
    {
      title: "Mobile App Development",
      description:
        "We develop high-quality, custom cross-platform mobile applications that are robust and optimized for performance, scalability, and accessibility.",
      icon: (
        <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v16H7V4zm2 2v2h6V6H9zm0 4v2h6v-2H9zm0 4v2h4v-2H9z" />
      ),
      gradient: "from-emerald-500 to-green-600",
      border: "border-emerald-100 hover:border-emerald-300",
      highlight: "group-hover:text-emerald-600",
      line: "from-emerald-400 to-green-500",
    },
    {
      title: "Domain and Hosting",
      description:
        "We provide domain registration and web hosting services to individuals and organizations to enable them gain visibility in the digital space.",
      icon: (
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      ),
      gradient: "from-teal-500 to-green-600",
      border: "border-teal-100 hover:border-teal-300",
      highlight: "group-hover:text-teal-600",
      line: "from-teal-400 to-green-500",
    },
    {
      title: "IT Consultations",
      description:
        "Our IT consultations service provides expert guidance and support for businesses looking to optimize their technology solutions.",
      icon: (
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      ),
      gradient: "from-lime-500 to-green-600",
      border: "border-lime-100 hover:border-lime-300",
      highlight: "group-hover:text-lime-600",
      line: "from-lime-400 to-green-500",
    },
  ];

  const features = [
    {
      title: "We Build",
      description:
        "With over 10 years experience in software analysis and design and a deep understanding of the latest IT trends and solutions, we provide customized recommendations and strategies to help you improve your operations, reduce costs, and increase efficiency.",
      icon: (
        <path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path>
      ),
      gradient: "from-green-600 to-emerald-600",
    },
    {
      title: "We Collaborate",
      description:
        "We can collaborate with your existing tech team to scale existing software applications or design customized software applications that suits your everyday need and simplifies various processes.",
      icon: (
        <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
      ),
      gradient: "from-emerald-600 to-teal-600",
    },
  ];

  return (
    <div id="services" className="relative py-20  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <section className="text-center mb-16" data-aos="zoom-in-down">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Comprehensive Digital Solutions
          </h2>
          <div className="flex justify-center mb-8">
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are deeply committed to the growth and success of our clients
            through innovative technology solutions.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-24" data-aos="fade-up" data-aos-delay="300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white transition-all duration-500 overflow-hidden hover:shadow-2xl hover:-translate-y-2 rounded-2xl p-6 group border ${service.border} relative min-h-[400px] flex flex-col`}
              >
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-bl-2xl opacity-10`}
                ></div>
                <div className="text-center flex-grow flex flex-col">
                  <div className="mb-6 flex justify-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-md`}
                    >
                      <svg
                        className="w-10 h-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {service.icon}
                      </svg>
                    </div>
                  </div>
                  <h3
                    className={`font-bold text-2xl text-gray-800 ${service.highlight} transition-colors duration-300 mb-4`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div
                    className={`h-1 bg-gradient-to-r ${service.line} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={400 + index * 100}
              >
                <div className="flex items-start">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-md mr-6`}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {feature.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      <span
                        className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                      >
                        {feature.title}
                      </span>
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
