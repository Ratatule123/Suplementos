/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",      // Olha todos os arquivos dentro da pasta app
    "./src/components/**/*.{js,ts,jsx,tsx}" // Olha os componentes
  ],
  theme: {
    extend: {},  // Aqui você pode estender o tema padrão do Tailwind, se quiser
  },
  plugins: [],
}

