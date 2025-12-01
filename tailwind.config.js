/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#04050a',
        champagne: '#f4e3c3',
        aurora: '#64ffd9',
        amethyst: '#a78bfa',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 10px 45px rgba(100, 255, 217, 0.35)',
        soft: '0 20px 60px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'luxury-grid':
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}

