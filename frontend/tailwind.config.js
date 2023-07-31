/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: { 
          'White': '#f5f5f5',
          'ShadowWhite': '#e2e2e2',
          'Grey': '#383837',
          'Green': '#00917C',
          'Muggy': '#dcdcd3',
        }
      }
    }
  },
  plugins: [],
}

