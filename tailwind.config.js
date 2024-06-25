/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'green-opacity': 'rgba(0, 128, 0, 1)',  // Green color with full opacity
        'black-opacity': 'rgba(0, 0, 0, 0)',    // Black color with zero opacity
      },
    },
  },
  plugins: [],
}