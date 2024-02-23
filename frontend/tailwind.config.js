const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#EC671B",
          foreground: "#FFFFFF",
        },
        secondary: "#3663AD",
        focus: "#BEF264",
      },
      fontFamily: {
        sans: ["Roboto"],
        body: ["Raleway"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
});
