/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sevilana: " 'Sevillana', cursive ",
        nunito:" 'Nunito', sans-serif"
      }
    },
  },
  plugins: [],
};
