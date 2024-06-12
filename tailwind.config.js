/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': '#f9fafb',
        'background-secondary': '#d2d6db',
      },
    },
  },
  plugins: [],
}

