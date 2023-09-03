/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      desktop: '1440px'
    },
    colors: {
      'very-dark-blue': 'hsl(233, 47%, 7%)',
      'dark-desaturated-blue': 'hsl(244, 38%, 16%)',
      'soft-violet': 'hsl(277, 64%, 61%)',
      'dark-violet': 'hsl(277, 70%, 30%)',
      white: 'hsl(0, 0%, 100%)'
    },
    fontFamily: {
      inter: 'Inter, sans-serif',
      'lexend-deca': 'Lexend Deca, sans-serif'
    },
    extend: {},
  },
  plugins: [],
}

