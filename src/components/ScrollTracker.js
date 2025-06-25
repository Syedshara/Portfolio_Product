"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "main", label: "Home" },
  { id: "intro", label: "About" },
  { id: "services", label: "Services" },
  { id: "products", label: "Products" },
  { id: "clients", label: "Clients" },
  { id: "cta", label: "Contact" },
  { id: "footer", label: "Footer" },
];

export default function ScrollTracker() {
  const [activeSection, setActiveSection] = useState("main");
  const [isVisible, setIsVisible] = useState(false);
  const [sparkleIndex, setSparkleIndex] = useState(-1);
  const [pulseIndex, setPulseIndex] = useState(-1);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          // Trigger enhanced effects when section comes into view
          const index = sections.findIndex((s) => s.id === entry.target.id);
          if (index >= 0) {
            setSparkleIndex(index);
            setPulseIndex(index);
            setTimeout(() => {
              setSparkleIndex(-1);
              setPulseIndex(-1);
            }, 1200);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top <= window.innerHeight * 0.7) {
          setActiveSection("footer");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    const timer = setTimeout(() => setIsVisible(true), 1000);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
      }`}
    >
      <div className="relative">
        {/* Background track */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-200 rounded-full" />

        {/* Progress track - now always green themed */}
        <div
          className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 rounded-full transition-all duration-500 ease-out bg-gradient-to-b from-emerald-400 to-green-600"
          style={{
            height: `${
              ((sections.findIndex((s) => s.id === activeSection) + 1) /
                sections.length) *
              100
            }%`,
          }}
        />

        <div className="relative flex flex-col space-y-6">
          {sections.map((section, index) => {
            const isActive = section.id === activeSection;
            const isPassed =
              sections.findIndex((s) => s.id === activeSection) >= index;
            const isSparkling = sparkleIndex === index;
            const isPulsing = pulseIndex === index;

            const buttonClass = `
              relative w-3 h-3 rounded-full border-2 transition-all duration-300 ease-out hover:scale-125 cursor-pointer
              ${
                isActive
                  ? "bg-gradient-to-r from-emerald-400 to-green-600 border-white shadow-lg shadow-emerald-500/30 scale-110"
                  : isPassed
                  ? "bg-emerald-300 border-emerald-200"
                  : "bg-white border-gray-300 hover:border-emerald-300"
              }
            `;

            const tooltipClass = `
              absolute right-6 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-emerald-900 text-white text-sm rounded-lg shadow-lg 
              transition-all duration-200 ease-out pointer-events-none whitespace-nowrap
              opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
            `;

            return (
              <div key={section.id} className="relative group">
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={buttonClass}
                  aria-label={`Go to ${section.label} section`}
                >
                  {/* Active section ping effect */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-green-600 animate-ping opacity-20" />
                  )}

                  {/* Enhanced sparkle and pulse effects */}
                  {isSparkling && (
                    <>
                      <div className="absolute -inset-2 rounded-full bg-emerald-300 opacity-40 animate-sparkle-pulse" />
                      <div className="absolute -inset-1 rounded-full bg-white opacity-60 animate-sparkle-pulse-inner" />
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-emerald-200 rounded-full animate-sparkle-float"
                          style={{
                            top: `${-20 + Math.random() * 140}%`,
                            left: `${-20 + Math.random() * 140}%`,
                            animationDelay: `${i * 0.15}s`,
                          }}
                        />
                      ))}
                    </>
                  )}

                  {/* Ripple effect */}
                  {isPulsing && (
                    <div className="absolute -inset-3 rounded-full border-2 border-emerald-400 opacity-60 animate-ripple" />
                  )}
                </button>

                <div className={tooltipClass}>
                  {section.label}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-emerald-900 rotate-45" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced animations */}
      <style jsx global>{`
        @keyframes sparkle-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.8);
            opacity: 0.1;
          }
        }

        @keyframes sparkle-pulse-inner {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.4);
            opacity: 0.2;
          }
        }

        @keyframes sparkle-float {
          0% {
            transform: scale(0) translateY(0px);
            opacity: 0;
          }
          20% {
            transform: scale(1) translateY(-5px);
            opacity: 1;
          }
          80% {
            transform: scale(1) translateY(-15px);
            opacity: 0.8;
          }
          100% {
            transform: scale(0) translateY(-25px);
            opacity: 0;
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        .animate-sparkle-pulse {
          animation: sparkle-pulse 1.2s ease-out infinite;
        }

        .animate-sparkle-pulse-inner {
          animation: sparkle-pulse-inner 1s ease-out infinite;
        }

        .animate-sparkle-float {
          animation: sparkle-float 1s ease-out forwards;
        }

        .animate-ripple {
          animation: ripple 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
