/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Semi Condensed"', 'sans-serif'],
      },
    },
    variants: {
      extend: {
        before: ['hover', 'focus'], // Enable `before` variants
      }}
  },
  
  plugins: [],
}

