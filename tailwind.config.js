/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F0F9FF', // Sky 50 (Ultra light calming blue-tinted white)
        primary: '#1D4ED8', // Blue 700 (Trustworthy, professional dental blue)
        accent: '#06B6D4', // Cyan 500 (Clean, soothing medical cyan)
        dark: '#0F172A', // Slate 900 (High contrast text, retains softness over pure black)
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      }
    },
  },
  plugins: [],
}
