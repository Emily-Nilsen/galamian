module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          400: '#FFE0BA',
          500: '#F2CA99',
        },
        gold: {
          400: '#E6A165',
          500: '#D9985F',
          600: '#BF8654',
        },
        brown: {
          500: '#8C5D42',
        },
      },
      backgroundImage: {
        notfound: `url('/static/lost.jpg')`,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
