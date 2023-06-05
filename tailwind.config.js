/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'woodsmoke': {
          '50': '#f7f6f7',
          '100': '#e3e0e7',
          '200': '#c6c1ce',
          '300': '#a19aae',
          '400': '#7e748d',
          '500': '#645a72',
          '600': '#4f465b',
          '700': '#423b4a',
          '800': '#37323d',
          '900': '#302c35',
          '950': '#080709',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@gradin/tailwindcss-skeleton-screen'),
  ],
}
