"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useAppContext } from "../context/AppContext"

const Products = () => {
  const { products } = useAppContext()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

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
  }

  const hoverVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

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
            {products.sectionTitle.split(" ")[0]}{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {products.sectionTitle.split(" ")[1]}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{products.sectionSubtitle}</p>
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
          {products.items.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border ${product.border}`}
            >
              <div className={`flex flex-col lg:flex-row ${product.reverse ? "lg:flex-row-reverse" : ""}`}>
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
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d={product.icon} />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">{product.title}</h3>
                    <p className="text-opacity-80 text-white text-sm mt-2">{product.subtitle}</p>
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
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-3">
                      {product.features.map((feature, i) => (
                        <motion.span
                          key={i}
                          className="flex items-center text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className={`w-2 h-2 ${product.bullet} rounded-full mr-2`}></div>
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
  )
}

export default Products
