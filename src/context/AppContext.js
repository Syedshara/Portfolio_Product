"use client";

import { createContext, useContext } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const appData = {
    // Company Information
    company: {
      name: "OrderAI",
      tagline: "Effortless Ordering, Powered by AI",
      fullName: "Zohfy",
      subtitle: "| waabot",
      description:
        "Welcome to OrderAI: Your Smart Ordering Solution on WhatsApp",
      email: "info@moladekonsult.com",
      phone: "+234 (0) 123 456 7890",
      phoneAlt: "08055384406",
      emailAlt: "info@Zohfy.ng",
      address: {
        street: "Ilo Awela, Ota",
        state: "Ogun State",
        country: "Nigeria",
        full: "Ilo Awela, Ota, Ogun State",
      },
    },

    // Colors and Gradients[dont change]
    theme: {
      primary: "primary",
      secondary: "secondary",
      colors: {
        green: {
          50: "green-50",
          100: "green-100",
          200: "green-200",
          300: "green-300",
          400: "green-400",
          500: "green-500",
          600: "green-600",
          700: "green-700",
          800: "green-800",
          900: "green-900",
        },
        emerald: {
          50: "emerald-50",
          100: "emerald-100",
          200: "emerald-200",
          300: "emerald-300",
          400: "emerald-400",
          500: "emerald-500",
          600: "emerald-600",
          700: "emerald-700",
          800: "emerald-800",
          900: "emerald-900",
        },
        teal: {
          50: "teal-50",
          100: "teal-100",
          200: "teal-200",
          300: "teal-300",
          400: "teal-400",
          500: "teal-500",
          600: "teal-600",
          700: "teal-700",
          800: "teal-800",
          900: "teal-900",
        },
        lime: {
          50: "lime-50",
          100: "lime-100",
          200: "lime-200",
          300: "lime-300",
          400: "lime-400",
          500: "lime-500",
          600: "lime-600",
          700: "lime-700",
          800: "lime-800",
          900: "lime-900",
        },
        cyan: {
          50: "cyan-50",
          100: "cyan-100",
          200: "cyan-200",
          300: "cyan-300",
          400: "cyan-400",
          500: "cyan-500",
          600: "cyan-600",
          700: "cyan-700",
          800: "cyan-800",
          900: "cyan-900",
        },
        blue: {
          50: "blue-50",
          100: "blue-100",
          200: "blue-200",
          300: "blue-300",
          400: "blue-400",
          500: "blue-500",
          600: "blue-600",
          700: "blue-700",
          800: "blue-800",
          900: "blue-900",
        },
        gray: {
          50: "gray-50",
          100: "gray-100",
          200: "gray-200",
          300: "gray-300",
          400: "gray-400",
          500: "gray-500",
          600: "gray-600",
          700: "gray-700",
          800: "gray-800",
          900: "gray-900",
        },
        slate: {
          50: "slate-50",
          100: "slate-100",
          200: "slate-200",
          300: "slate-300",
          400: "slate-400",
          500: "slate-500",
          600: "slate-600",
          700: "slate-700",
          800: "slate-800",
          900: "slate-900",
        },
        white: "white",
        black: "black",
      },
      gradients: {
        primary: "from-green-500 to-emerald-600",
        secondary: "from-emerald-500 to-green-600",
        tertiary: "from-emerald-500 to-teal-600",
        quaternary: "from-teal-500 to-green-600",
        quinary: "from-lime-500 to-green-600",
        senary: "from-teal-500 to-cyan-600",
        background: "from-black/90 via-slate-800 to-black/90",
        radial: "from-transparent via-green-900/10 to-black/50",
        topGradient: "from-green-400/20 via-transparent to-gray-900/40",
        textGradient: "from-slate-900 via-blue-900 to-emerald-900",
        buttonGradient: "from-emerald-500 to-green-600",
        buttonHoverGradient: "from-emerald-400 to-green-500",
        footerGradient: "from-white via-gray-100 to-emerald-50",
        footerCompanyGradient: "from-emerald-500 via-emerald-400 to-teal-500",
      },
    },

    // Images
    images: {
      hero: "/images/web-dev.svg",
      landing: "/images/landing_image.jpg",
      favicon: "/favicon.ico",
      logo192: "/logo192.png",
      logo512: "/logo512.png",
      clients: {
        protergia: "/images/clients/protergia.png",
        kws: "/images/clients/kws.png",
        geps: "/images/clients/geps.png",
      },
      group: "/images/Group 162533.png",
    },

    // Content
    content: {
      intro: {
        main: "Welcome to OrderAI, where we revolutionize the way you manage your orders with cutting-edge AI technology. Our platform is designed to streamline your ordering process, making it faster, smarter, and more efficient than ever before.",
        secondary:
          "Whether you're a small business or a large enterprise, OrderAI provides the tools you need to optimize your order management, enhance customer satisfaction, and drive growth. Join us on this journey to transform your ordering experience with AI-driven solutions.",
        bot: "OrderAI is an intelligent, AI-powered WhatsApp chatbot",
        botDetail:
          "designed to handle everything from customer inquiries, product catalogs, order management, and payment confirmations to personalized support — all within the familiar, everyday experience of WhatsApp.\nBuilt for businesses of all sizes, OrderAI ensures your customers never have to wait in long queues or navigate clunky apps.",
        botFooter:
          "It delivers instant, friendly, and reliable conversations, helping your brand stay responsive and approachable 24/7.",
      },
      hero: {
        title: "Effortless Ordering, Powered by AI",
        subtitle:
          "Welcome to OrderAI: Your Smart Ordering Solution on WhatsApp",
        cta: "Learn more",
      },
      cta: {
        title: "Are you ready to scale your business?",
        subtitle: "Get in touch and let us build something amazing together!",
        button: "Send a message",
        readyText: "Ready to start?",
      },
    },

    // Services Data
    services: {
      sectionTitle: "Our Services",
      sectionSubtitle: "Comprehensive Digital Solutions",
      sectionDescription:
        "We are deeply committed to the growth and success of our clients through innovative technology solutions.",
      items: [
        {
          title: "Web Development",
          description:
            "We specialize in creating and optimizing high-quality, custom websites for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use websites and applications for clients.",
          icon: "M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z",
          gradient: "from-green-500 to-emerald-600",
          border: "border-green-100 hover:border-green-300",
          highlight: "group-hover:text-green-600",
          line: "from-green-400 to-emerald-500",
        },
        {
          title: "Mobile App Development",
          description:
            "We develop high-quality, custom cross-platform mobile applications that are robust and optimized for performance, scalability, and accessibility.",
          icon: "M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v16H7V4zm2 2v2h6V6H9zm0 4v2h6v-2H9zm0 4v2h4v-2H9z",
          gradient: "from-emerald-500 to-green-600",
          border: "border-emerald-100 hover:border-emerald-300",
          highlight: "group-hover:text-emerald-600",
          line: "from-emerald-400 to-green-500",
        },
        {
          title: "Domain and Hosting",
          description:
            "We provide domain registration and web hosting services to individuals and organizations to enable them gain visibility in the digital space.",
          icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
          gradient: "from-teal-500 to-green-600",
          border: "border-teal-100 hover:border-teal-300",
          highlight: "group-hover:text-teal-600",
          line: "from-teal-400 to-green-500",
        },
        {
          title: "IT Consultations",
          description:
            "Our IT consultations service provides expert guidance and support for businesses looking to optimize their technology solutions.",
          icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
          gradient: "from-lime-500 to-green-600",
          border: "border-lime-100 hover:border-lime-300",
          highlight: "group-hover:text-lime-600",
          line: "from-lime-400 to-green-500",
        },
      ],
      features: [
        {
          title: "We Build",
          description:
            "With over 10 years experience in software analysis and design and a deep understanding of the latest IT trends and solutions, we provide customized recommendations and strategies to help you improve your operations, reduce costs, and increase efficiency.",
          icon: "M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z",
          gradient: "from-green-600 to-emerald-600",
        },
        {
          title: "We Collaborate",
          description:
            "We can collaborate with your existing tech team to scale existing software applications or design customized software applications that suits your everyday need and simplifies various processes.",
          icon: "m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z",
          gradient: "from-emerald-600 to-teal-600",
        },
      ],
    },

    // Products Data
    products: {
      sectionTitle: "Our Products",
      sectionSubtitle:
        "Powerful solutions designed to streamline your business operations",
      items: [
        {
          title: "Business Management",
          subtitle: "Complete Business Solution",
          description:
            "Our Business Management System is a robust and easily scalable system that streamlines business operations, increases efficiency, and ultimately drives growth and profitability for your business.",
          features: ["Cloud-based", "Scalable", "Multi-device"],
          icon: "M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h10v2H3v-2z",
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
          icon: "M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z",
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
          icon: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z",
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
          icon: "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z",
          gradient: "from-lime-500 to-green-600",
          border: "border-lime-100 hover:border-lime-300",
          highlight: "group-hover:text-lime-600",
          button: "bg-lime-600 hover:bg-lime-700",
          bullet: "bg-lime-500",
          reverse: true,
        },
      ],
    },

    // Navigation
    navigation: {
      items: [
        { name: "About", href: "/#about" },
        { name: "Services", href: "/#services" },
        { name: "Products", href: "/#portfolio" },
        { name: "Contact Us", href: "/contact#contact" },
      ],
      cta: {
        name: "Demo our products",
        href: "/get-demo#demo",
      },
    },

    // Social Media
    social: {
      facebook: "https://www.facebook.com/ENLIGHTENEERING/",
      linkedin: "https://www.linkedin.com/company/enlighteneering-inc-",
      twitter: "#",
      instagram: "#",
    },

    // Form Configuration
    forms: {
      contact: {
        title: "Send us a message",
        fields: [
          { name: "first_name", placeholder: "First Name*", type: "text" },
          { name: "last_name", placeholder: "Last Name*", type: "text" },
          { name: "email", placeholder: "Email*", type: "email" },
          { name: "phone_number", placeholder: "Phone*", type: "number" },
          { name: "message", placeholder: "Message*", type: "textarea" },
        ],
        submitText: "Send Message",
        loadingText: "Loading...",
      },
      demo: {
        title: "Demo our products",
        products: [
          {
            value: "business_management_system",
            label: "Business Management System",
          },
          {
            value: "school_management_portal",
            label: "School Management Portal",
          },
          {
            value: "payroll_management_system",
            label: "Payroll Management System",
          },
          {
            value: "event_management_system",
            label: "Event Management System",
          },
        ],
        fields: [
          { name: "first_name", placeholder: "First Name*", type: "text" },
          { name: "last_name", placeholder: "Last Name*", type: "text" },
          { name: "email", placeholder: "Email*", type: "email" },
          { name: "phone_number", placeholder: "Phone*", type: "number" },
          { name: "message", placeholder: "Message*", type: "textarea" },
        ],
        submitText: "Send Message",
        loadingText: "Loading...",
      },
    },

    // Footer
    footer: {
      sections: {
        contact: {
          title: "Get In Touch",
          items: [
            { type: "email", label: "Email", value: "info@moladekonsult.com" },
            { type: "phone", label: "Phone", value: "+234 (0) 123 456 7890" },
          ],
        },
        social: {
          title: "Follow Our Journey",
        },
      },
      legal: {
        copyright: "Molad e Konsult. All rights reserved.",
        links: [
          { name: "Privacy Policy", href: "#" },
          { name: "Terms of Service", href: "#" },
        ],
      },
    },

    // Page Titles
    pageTitles: {
      home: "OrderAI | Zohfy",
      contact: "Contact | Zohfy",
      demo: "Demo | Zohfy",
    },

    // API Endpoints (Environment Variables)
    api: {
      contact: process.env.REACT_APP_CONTACT_API, //dummy
      demo: process.env.REACT_APP_DEMO_REQUEST_API,
    },

    // Animation Settings
    animations: {
      aos: {
        duration: 1000,
        easing: "ease-out-cubic",
        once: true,
      },
    },
  };

  return <AppContext.Provider value={appData}>{children}</AppContext.Provider>;
};
