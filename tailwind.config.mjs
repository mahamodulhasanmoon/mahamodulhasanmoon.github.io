/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,md,ts,js}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'] },
      colors: {
        brand: { 400: '#7aa8ff', 500: '#4f8cff', 600: '#3b74e6' },
        ink: { 950: '#070a12', 900: '#0b0f19', 800: '#131a2a', 700: '#1f2a40' },
      },
      keyframes: {
        fadeInUp: { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'none' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        blob: { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '33%': { transform: 'translate(30px,-40px) scale(1.1)' }, '66%': { transform: 'translate(-20px,20px) scale(.95)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        pulseRing: { '0%': { transform: 'scale(1)', opacity: '.7' }, '100%': { transform: 'scale(2.2)', opacity: '0' } },
        gradientMove: { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
      },
      animation: {
        fadeInUp: 'fadeInUp .8s ease-out both', float: 'float 6s ease-in-out infinite', blob: 'blob 14s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite', pulseRing: 'pulseRing 1.8s cubic-bezier(0,0,.2,1) infinite', gradientMove: 'gradientMove 8s ease infinite',
      },
    },
  },
};
