/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/index.html",
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
        colors: {
          primary: '#1D4ED8',
          secondary: '#9333EA',
        },
        spacing: {
          '128': '32rem',
        },
      },
    },
    plugins: [],
  }
  