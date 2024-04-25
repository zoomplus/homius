/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "#18222d",
        section: "rgba(37, 54, 72, 1)",
        accent: "#00b894",
        "main-text": "#fbfbfb",
        "second-text": "#b1c3d5",
      },
    },
  },
  plugins: [],
};
