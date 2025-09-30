/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        // A clean sans‑serif font stack for a modern look. These fonts
        // gracefully fall back if unavailable on the host system.
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif'
        ],
      },
    },
  },
  plugins: [],
};