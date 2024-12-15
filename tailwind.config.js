/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        flip: 'flip 2s infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
    },
  },
  plugins: [],
};