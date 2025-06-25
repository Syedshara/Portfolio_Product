import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Briefcase,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-white via-gray-100 to-emerald-50 text-gray-900 overflow-hidden">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="rgba(16, 185, 129, 0.3)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="150" cy="200" r="100" fill="rgba(16, 185, 129, 0.1)" />
          <circle cx="850" cy="300" r="80" fill="rgba(59, 130, 246, 0.1)" />
        </svg>
      </div>

      {/* Animated wave effect */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="rgba(16, 185, 129, 0.1)"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Company Info Block - Left Side */}
          <div className="flex justify-center md:justify-start">
            <div className="relative bg-gradient-to-br from-emerald-500 via-emerald-400 to-teal-500 p-6 rounded-3xl shadow-2xl w-full max-w-md">
              <div className="absolute top-2 right-2 w-8 h-8 border-2 border-white/30 rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 bg-white/20 rounded-full"></div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 mx-auto">
                  <Briefcase className="w-8 h-8 text-green-100" />
                </div>
                <h3 className="font-bold text-3xl mb-2 text-white tracking-wider">
                  MLD
                </h3>
                <h4 className="font-semibold text-lg mb-4 text-emerald-100">
                  Molad e Konsult
                </h4>
                <div className="flex items-center justify-center gap-2 text-sm text-emerald-100">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-medium">Ilo Awela, Ota</p>
                    <p className="opacity-90">Ogun State, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Social - Right Side */}
          <div className="flex  h-full justify-between">
            <div>
              <h6 className="text-xl font-bold mb-6 text-black relative pb-2">
                Get In Touch
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"></div>
              </h6>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-400/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-md text-gray-400">Email</div>
                    <span className="text-md">info@moladekonsult.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-400/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-md text-gray-400">Phone</div>
                    <span className="text-md">+234 (0) 123 456 7890</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h6 className="text-xl font-bold mb-6 text-black relative pb-2">
                Follow Our Journey
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"></div>
              </h6>

              <div className="flex gap-3">
                {[
                  {
                    icon: Facebook,
                    color: "hover:bg-blue-600 hover:text-white",
                  },
                  {
                    icon: Twitter,
                    color: "hover:bg-sky-500 hover:text-white",
                  },
                  {
                    icon: Linkedin,
                    color: "hover:bg-blue-700 hover:text-white",
                  },
                  {
                    icon: Instagram,
                    color: "hover:bg-pink-600 hover:text-white",
                  },
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`w-12 h-12 bg-green-100/50 ${social.color} rounded-xl flex items-center justify-center transition-colors border border-slate-600/50 group`}
                  >
                    <social.icon className="w-5 h-5 text-slate-600 group-hover:text-white" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-xs md:text-sm">
                © {new Date().getFullYear()} Molad e Konsult. All rights
                reserved.
              </p>
            </div>

            <div className="flex gap-4 text-xs md:text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg
          className="relative block w-full h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="rgba(16, 185, 129, 0.05)"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
