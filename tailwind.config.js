/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{js,ts,vue}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.js",
    "./app.vue",],
  theme: {
    extend: {
      colors: {
        'pastel-blue': '#a8d5e2',
        'pastel-green': '#a8e6cf',
        'pastel-purple': '#d8b4e2',
        sand: '#f8ede3', // Arena
        'rose-pastel': '#f4c2c2', // Rosa pastel
        'rose-light': '#fae1dd', // Rosa claro
        'soft-pink': '#ffe5ec', // Rosa pastel suave
        'light-purple': '#d9c3f7', // Morado claro
        'light-blue': '#c8e7f3', // Azul pastel claro
        'stone-gray': '#e5e5e5', // Gris piedra
        'mint-green': '#8fd9a8', // Verde menta
        'sky-blue': '#a8d0e6', // Azul claro desaturado
      },
    },
  },
  plugins: [],
}

