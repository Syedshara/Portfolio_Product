import { Link } from "react-router-dom"
import { useAppContext } from "../context/AppContext"
import { ArrowRight, Sparkles } from "lucide-react"

const Intro = () => {
  const { content, images } = useAppContext()

  return (
    <div id="about" className="py-16 md:py-24 ">
      <section className="">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image - Now on the left side */}
            <div className="lg:w-1/2 order-1" data-aos="zoom-in">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/30 to-blue-400/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative overflow-hidden rounded-xl shadow-2xl border border-gray-100">
                  <img
                    alt="AI-powered ordering system dashboard"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    src={images.landing || "/placeholder.svg"}
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-emerald-700 px-3 py-1 rounded-lg text-sm font-semibold shadow-sm">
                    <Sparkles className="inline mr-1 w-4 h-4" />
                    AI Powered
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content - Now on the right side */}
            <div className="lg:w-1/2 order-2 space-y-6 lg:space-y-8" data-aos="zoom-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium text-emerald-700">
                <Sparkles className="w-4 h-4" />
                AI-Powered Innovation
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-emerald-900 bg-clip-text text-transparent leading-tight">
                {content.intro.bot}
              </h1>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">{content.intro.botDetail}</p>
                <p className="text-lg text-slate-500 leading-relaxed">{content.intro.botFooter}</p>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden text-lg font-semibold text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  {/* Button background with gradient and shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 group-hover:from-emerald-400 group-hover:to-green-500 transition-colors duration-300"></span>

                  {/* Shine effect on hover */}
                  <span className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="absolute top-0 left-1/4 w-1/2 h-full bg-white/20 -skew-x-12 animate-shine"></span>
                  </span>

                  {/* Button content */}
                  <span className="relative flex items-center">
                    Contact Us
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Intro
