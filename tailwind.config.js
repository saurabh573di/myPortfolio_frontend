/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        // Custom shadow with NO top shadow, only left, right, and bottom
        'no-top': '4px 4px 10px rgba(0, 0, 0, 0.1), -4px 4px 10px rgba(0, 0, 0, 0.1), 0 8px 15px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        text: {
          '0%': { backgroundPosition: '0 0' },
          '50%': { backgroundPosition: '200px' },
          '100%': { backgroundPosition: '0 0' },
        },
        textReverse: {
          '0%': { backgroundPosition: '0 0' },
          '50%': { backgroundPosition: '-200px' },
          '100%': { backgroundPosition: '0 0' },
        },
      },
      animation: {
        text: 'text 10s infinite',
        textReverse: 'textReverse 10s infinite',
      },
    },
  },
  plugins: [],
}
