// tailwind.config.js
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#234987',
      },
    },
  },
  plugins: [],
});
