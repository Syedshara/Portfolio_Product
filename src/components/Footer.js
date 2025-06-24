import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className=" text-black">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info Block */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <h3 className="font-bold text-3xl mb-2 text-white">MLD</h3>
                  <h4 className="font-semibold text-lg mb-4 text-emerald-100">
                    Molad e Konsult
                  </h4>
                  <div className="text-sm text-emerald-100 space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <div>
                        <p>Ilo Awela, Ota</p>
                        <p>Ogun State, Nigeria</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h6 className="text-2xl font-bold mb-6 text-emerald-400 border-b-2 border-emerald-400 pb-2 inline-block">
                Quick Links
              </h6>
              <ul className="space-y-4">
                {[
                  { name: "About Us", href: "#about" },
                  { name: "Our Services", href: "#services" },
                  { name: "Portfolio", href: "#portfolio" },
                  { name: "Contact", href: "#contact" },
                  { name: "Blog", href: "#blog" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-900 hover:text-emerald-400 hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h6 className="text-2xl font-bold mb-6 text-emerald-400 border-b-2 border-emerald-400 pb-2 inline-block">
                Our Services
              </h6>
              <ul className="space-y-4">
                {[
                  { name: "Web Development", href: "#web-dev" },
                  { name: "Mobile App Development", href: "#mobile-dev" },
                  { name: "Domain & Hosting", href: "#hosting" },
                  { name: "IT Consultations", href: "#consulting" },
                  { name: "Digital Marketing", href: "#marketing" },
                ].map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-900 hover:text-emerald-400 hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="lg:col-span-1">
              <h6 className="text-2xl font-bold mb-6 text-emerald-400 border-b-2 border-emerald-400 pb-2 inline-block">
                Get In Touch
              </h6>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-800">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span>info@moladekonsult.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-800">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <span>+234 (0) 123 456 7890</span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-lg font-semibold mb-4 text-gray-800">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, href: "#", label: "Facebook" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Instagram, href: "#", label: "Instagram" },
                  ].map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 bg-slate-700 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
