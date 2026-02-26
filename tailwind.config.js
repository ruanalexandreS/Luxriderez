/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./src/**/*.{html,ts}",
],
theme: {
    extend: {
    colors: {
        'lux-red': '#ff0000',
        'lux-dark': '#121212',
    }
    },
},
plugins: [],
}