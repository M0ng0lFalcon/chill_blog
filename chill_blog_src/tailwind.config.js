/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/**/*.html', './src/**/*.{html,js,vue,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')]
}
