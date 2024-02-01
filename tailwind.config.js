/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#111418",
      "slate-50": "rgba(0, 0, 0, 0.95)",
      "slate-100": "rgba(250, 250, 250, 0.15)",
      gray: {
        100: "#dee3e4",
        200: "#aab1b8",
        900: "#343a40",
      },
      green: "#20c997",
    },
    extend: {},
  },
  plugins: [],
};
