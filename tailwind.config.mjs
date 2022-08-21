/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors.js'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        'light-blue': colors.sky,
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
}
