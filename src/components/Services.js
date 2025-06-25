import { useAppContext } from "../context/AppContext"

const Services = () => {
  const { services } = useAppContext()

  return (
    <div id="services" className="relative py-20  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <section className="text-center mb-16" data-aos="zoom-in-down">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
            {services.sectionTitle}
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">{services.sectionSubtitle}</h2>
          <div className="flex justify-center mb-8">
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{services.sectionDescription}</p>
        </section>

        {/* Services Grid */}
        <section className="mb-24" data-aos="fade-up" data-aos-delay="300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.items.map((service, index) => (
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
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d={service.icon} />
                      </svg>
                    </div>
                  </div>
                  <h3
                    className={`font-bold text-2xl text-gray-800 ${service.highlight} transition-colors duration-300 mb-4`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
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
            {services.features.map((feature, index) => (
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
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={feature.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      <span className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                        {feature.title}
                      </span>
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services
