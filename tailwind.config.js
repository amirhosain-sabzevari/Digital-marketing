/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  plugins: [
    require('flowbite/plugin')
  ],
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'colorProject': '#007aff',
      },
      maxWidth: {
        "500": "max-width:500px",
      },
    },
    container: {
      "center": true,
      padding: '3rem',
    }
  },
}

