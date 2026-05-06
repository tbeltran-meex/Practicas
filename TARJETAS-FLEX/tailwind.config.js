/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // El ** es la clave, busca en carpetas y subcarpetas
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}