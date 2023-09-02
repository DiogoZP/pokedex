/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/main.tsx",
    "./src/**/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "fire": "#ff0000",
        "water": "#0000ff",
        "grass": "#00ff00",
        "electric": "#ffff00",
        "ice": "#00ffff",
        "fighting": "#ff00ff",
        "poison": "#800080",
        "ground": "#808000",
        "flying": "#008080",
        "psychic": "#ff1493",
        "bug": "#008000",
        "rock": "#808080",
        "ghost": "#000080",
        "dark": "#000000",
        "dragon": "#800000",
        "steel": "#c0c0c0",
        "fairy": "#ffc0cb",
        "normal": "#c0c0c0",
      },
    },
  },
  plugins: [],
}

