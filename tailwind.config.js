/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Light, clean medical palette: blue / navy / white / grey
        ivory: '#F1F6FB', // page background (very light blue-white)
        cream: '#FFFFFF', // white surfaces + light text on dark sections
        sand: '#E2ECF5', // light blue-grey (bands, borders, hovers)
        sanddark: '#CBDAE9',
        forest: '#17324E', // primary navy (dark sections, headings)
        forestdark: '#0F2439', // deep navy (footer, overlays)
        bronze: '#3B7DB8', // blue accent (buttons, eyebrows, icons)
        bronzedark: '#2C6299',
        ink: '#263340', // slate text
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'Cambria', 'serif'],
        sans: ['Jost', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
