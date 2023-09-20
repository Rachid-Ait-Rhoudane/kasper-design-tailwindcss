/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./public/js/*.js"],
  theme: {
    extend: {
      colors: {
        "secondary": "#0f748fb3"
      },
      content: {
        'empty': "''",
      },
    },
  },
  plugins: [],
}

