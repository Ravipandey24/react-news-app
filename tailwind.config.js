/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
      background: '#F9F9F9',
      dark_background: '#282828',
      accent_shade: '#E76161'
    },
    fontFamily: {
      site_name: ['Lobster', 'cursive'],
      heading: ['Josefin Sans', 'sans-serif'],
      sub_heading: ['Alegreya Sans SC', 'sans-serif'],
      info: ['Titillium Web', 'sans-serif'],
      article_title: ['Urbanist', 'sans-serif'],
      accent: ['Comic Neue', 'cursive'],
      nothing: ['Handjet', 'cursive']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

