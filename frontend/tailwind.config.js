/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    container: false
  },
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    container: {
      screens: {
        DEFAULT: [{ raw: "100%" }],
        sm: { min: "640px" },
        md: { min: "768px" },
        lg: { min: "1024px" },
        xl: { min: "1280px" },
        "2xl": { min: "1536px" },
      },
    },
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
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          minWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
            minWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
            minWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
            minWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
            minWidth: '1280px',
          },
          '@screen 2xl': {
            maxWidth: '1536px',
            minWidth: '1536px',
          },
        }
      })
    }
  ],
};
