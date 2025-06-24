import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Products = () => {
  const products = [
    {
      title: "Business Management",
      subtitle: "Complete Business Solution",
      description:
        "Our Business Management System is a robust and easily scalable system that streamlines business operations, increases efficiency, and ultimately drives growth and profitability for your business.",
      features: ["Cloud-based", "Scalable", "Multi-device"],
      icon: (
        <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h10v2H3v-2z" />
      ),
      gradient: "from-green-500 to-emerald-600",
      border: "border-green-100 hover:border-green-300",
      highlight: "group-hover:text-green-600",
      button: "bg-green-600 hover:bg-green-700",
      bullet: "bg-green-500",
    },
    {
      title: "School Management",
      subtitle: "Educational Institution Solution",
      description:
        "Our all-encompassing School Management Portal helps educational institutions manage administrative tasks, automate processes, and streamline communication between all stakeholders.",
      features: ["Student Management", "Attendance", "Grades"],
      icon: (
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
      ),
      gradient: "from-emerald-500 to-teal-600",
      border: "border-emerald-100 hover:border-emerald-300",
      highlight: "group-hover:text-emerald-600",
      button: "bg-emerald-600 hover:bg-emerald-700",
      bullet: "bg-emerald-500",
      reverse: true,
    },
    {
      title: "Payroll Management",
      subtitle: "Automated Payment Solution",
      description:
        "The Payroll Management System automates employee payments for businesses of different sizes, ensuring accurate and timely payments while reducing manual effort.",
      features: ["Automated", "API Integration", "Accurate"],
      icon: (
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
      ),
      gradient: "from-teal-500 to-cyan-600",
      border: "border-teal-100 hover:border-teal-300",
      highlight: "group-hover:text-teal-600",
      button: "bg-teal-600 hover:bg-teal-700",
      bullet: "bg-teal-500",
    },
    {
      title: "Event Management",
      subtitle: "Complete Event Solution",
      description:
        "Our event management system helps manage different types of events with customizable menus, making your events fully customizable and memorable.",
      features: ["Customizable", "Multi-event", "User-friendly"],
      icon: (
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
      ),
      gradient: "from-lime-500 to-green-600",
      border: "border-lime-100 hover:border-lime-300",
      highlight: "group-hover:text-lime-600",
      button: "bg-lime-600 hover:bg-lime-700",
      bullet: "bg-lime-500",
      reverse: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
              Products
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful solutions designed to streamline your business operations
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border ${product.border}`}
            >
              <div
                className={`flex flex-col lg:flex-row ${
                  product.reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Left Side - Color Gradient */}
                <motion.div
                  className="lg:w-1/3 p-8 flex items-center justify-center relative overflow-hidden"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                  <div className="absolute inset-0 bg-black opacity-10"></div>
                  <div className="relative z-10 text-center">
                    <motion.div
                      className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <svg
                        className="w-10 h-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {product.icon}
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">
                      {product.title}
                    </h3>
                    <p className="text-opacity-80 text-white text-sm mt-2">
                      {product.subtitle}
                    </p>
                  </div>
                </motion.div>

                {/* Right Side - Content */}
                <div className="lg:w-2/3 p-8">
                  <motion.h4
                    className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {product.title} System
                  </motion.h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-3">
                      {product.features.map((feature, i) => (
                        <motion.span
                          key={i}
                          className="flex items-center text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div
                            className={`w-2 h-2 ${product.bullet} rounded-full mr-2`}
                          ></div>
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/get-demo"
                        className={`${product.button} text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center group shadow-md hover:shadow-lg`}
                      >
                        Schedule Demo
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
