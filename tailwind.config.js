/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Roboto Mono', 'monospace'],
        'mono-light': ['Roboto Mono', 'monospace'],
        'mono-medium': ['Roboto Mono', 'monospace'],
        'mono-bold': ['Roboto Mono', 'monospace'],
      },
      animation: {
        blob: "blob 7s infinite",
        sparkle: "sparkle 2s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        sparkle: {
          "0%": {
            transform: "scale(0) rotate(0deg)",
            opacity: 0,
          },
          "50%": {
            transform: "scale(1) rotate(180deg)",
            opacity: 1,
          },
          "100%": {
            transform: "scale(0) rotate(360deg)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: 'class',
};
