/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#00A88F',
          hover: '#008C78',
          light: '#E6F6F4',
          dark: '#005C4F',
        },
        sanmao: {
          bg: '#FFFFFF',
          bgSecondary: '#F5F5F7',
          textPrimary: '#1D1D1F',
          textSecondary: '#6E6E73',
          darkBg: '#000000',
          darkSecondary: '#161617',
          darkSecurity: '#090D12',
          borderLight: 'rgba(0,0,0,0.08)',
          borderDark: 'rgba(255,255,255,0.12)',
        },
      },
      fontFamily: {
        sans: ['Inter', '"Noto Sans SC"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'hero-desktop': ['clamp(64px, 7vw, 112px)', { lineHeight: '0.98', letterSpacing: '-0.045em' }],
        'h2-large': ['clamp(36px, 5vw, 64px)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'body-lead': ['20px', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
