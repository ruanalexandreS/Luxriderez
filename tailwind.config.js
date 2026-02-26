/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            colors: {
                'lux-neon': '#FF1E1E',   // Rojo Sangre Neón
                'lux-fire': '#FF4500',   // Rojo-Alaranjado
                'lux-deep': '#C8102E',   // Rojo Moto Profundo
                'lux-gold': '#FFCC00',   // Oro Fuego (para Precios/Premium)
            },
            boxShadow: {
                'neon': '0 0 20px rgba(255, 30, 30, 0.6)',
                'neon-strong': '0 0 40px rgba(255, 30, 30, 0.4)',
            }
        },
    },
    plugins: [],
}