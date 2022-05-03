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
      // animation: {
      //   'fade-in': 'fade-in 3.65s cubic-bezier(0.4, 0, 0.6, 1) 43.8',
      // },
      keyframes: {
        'fade-in': {
          '0%, 40%': { opacity: 0 },
          '40%, 60%': { opacity: 1 },
          '61%, 100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
