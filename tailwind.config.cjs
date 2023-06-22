/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Gotham Book, Gotham, sans-serif'],
    },
    extend: {
      keyframes: {
        'slide-out': {
          '0%': {
            transform: `translateX(0)`,
          },
          '20%': {
            transform: `translateX(100px)`,
            opacity: 0.1,
          },
          '100%': {
            transform: `translateX(280px)`,
            opacity: 0,
          },
        },
        'slide-in': {
          from: {
            transform: `translateX(280px)`,
            opacity: 0,
          },
          to: {
            transform: `translateX(0)`,
            opacity: 1,
          },
        },
      },
      animation: {
        'slide-out': 'slide-out 1s ease-out forwards',
        'slide-in': 'slide-in 0.7s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
