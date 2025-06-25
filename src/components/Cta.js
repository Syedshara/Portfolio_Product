import { Link } from "react-router-dom"
import { useAppContext } from "../context/AppContext"

const Cta = () => {
  const { content } = useAppContext()

  return (
    <div className="w-full flex items-center justify-center text-white cta">
      <div className="mx-8 w-full h-96 text-center lg:text-left py-16 px-12 flex lg:justify-between items-center">
        <div className="w-full flex flex-col lg:flex-row lg:justify-around items-center">
          <div className="mb-4">
            <p className="text-2xl md:text-4xl font-bold mb-4 text-emerald-50">
              {content.cta.title.split("scale")[0]} <span className="text-green-400">scale</span>{" "}
              {content.cta.title.split("scale")[1]}
            </p>
            <p className="text-lg md:text-2xl text-emerald-100">
              {content.cta.subtitle.split("together!")[0]} <span className="text-green-400 font-bold">together!</span>
            </p>
          </div>

          <div className="flex-shrink-0 relative">
            {/* Glowing background for button */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-500 rounded-2xl blur-xl opacity-30 animate-pulse"></div>

            <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform rotate-12 hover:rotate-0 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <p className="text-green-200 text-sm font-medium">{content.cta.readyText}</p>
              </div>

              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 overflow-hidden"
              >
                {/* Button background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform -skew-x-12 -translate-x-full group-hover:translate-x-full"></div>

                <span className="relative z-10 text-lg">{content.cta.button}</span>
                <svg
                  className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
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

              {/* Decorative corner elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-green-400 opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-emerald-400 opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cta
