/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Pitch Black Swiss palette
        black: {
          DEFAULT: '#000000',
          50: '#050505',
          100: '#0a0a0a',
          200: '#0f0f0f',
          300: '#141414',
          400: '#1a1a1a',
          500: '#1f1f1f',
          600: '#242424',
          700: '#292929',
          800: '#2e2e2e',
          900: '#333333',
        },
        // Accent colors
        accent: {
          orange: '#FF6B35',
          blue: '#3B82F6',
          silver: '#C0C0C0',
        },
      },
      fontFamily: {
        harmond: ['var(--font-harmond)', 'serif'],
        nohemi: ['var(--font-nohemi)', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'border-spin': 'border-spin 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { opacity: '0.5', filter: 'blur(10px)' },
          '100%': { opacity: '1', filter: 'blur(20px)' },
        },
        'border-spin': {
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'grid-white': 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'rgb(255 255 255 / 0.02)\'%3e%3cpath d=\'M0 .5H31.5V32\'/%3e%3c/svg%3e")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(255, 255, 255, 0.1)',
        'glow-md': '0 0 20px rgba(255, 255, 255, 0.15)',
        'glow-lg': '0 0 40px rgba(255, 255, 255, 0.2)',
        'glow-accent': '0 0 30px rgba(59, 130, 246, 0.3)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
