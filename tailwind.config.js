/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
      }
    },
    colors: {
      'prim': '#A8D8EA',
      'secon': '#AA96DA',
      'third': '#61C0BF',
      'slate': '#3C3D37',
    }
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: false,
  },
}