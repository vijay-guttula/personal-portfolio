module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      mobile: '360px',
      md: '720px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
