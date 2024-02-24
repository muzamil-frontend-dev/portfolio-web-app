/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: {
        DEFAULT: "#ffffff",
        100: "#ddd",
      },
      black: {
        100: "#111418",
        200: "#212529",
      },
      slate: {
        DEFAULT: "rgba(0, 0, 0, 0.7)",
        100: "rgba(0, 0, 0, 0.95)",
        200: "rgba(250, 250, 250, 0.15)",
        300: "rgba(255, 255, 255, 0.5)",
        400: "rgba(250, 250, 250, 0.12)",
      },
      gray: {
        100: "#dee3e4",
        200: "#aab1b8",
        800: "#6c757d",
        900: "#343a40",
      },
      blue: "#111418",
      green: "#20c997",
      darkGreen: "#1baa80",
      red: "rgba(220, 53, 69, 1)",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
    },
    extend: {
      poppins: ["Poppins", "sans-serif"],
      fontSize: {
        "2.5xl": [
          "1.75rem",
          {
            lineHeight: "2.125rem",
          },
        ],
      },
      lineHeight: {
        "extra-loose": "3.5rem",
      },
      spacing: {
        18: "4.5rem",
      },
      maxHeight: {
        hvh: "65vh",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
