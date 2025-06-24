module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#10BC69", //  main green
          light: "#10A569", // optional lighter shade
          dark: "#10DC69", // optional darker shade
        },
        secondary: {
          DEFAULT: "#5F687B", // example yellow, change as needed
          light: "#9CA3AF",
          dark: "#5F688C",
        },
        accent: "#2563eb", // optional accent color
      },
    },
  },
  plugins: [],
};
