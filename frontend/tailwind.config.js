/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                black: "#1A1C20",
                white: "#F4F4F4",
                orange: "#F0A500",
                darkOrange: "#CF7500",
            },
        },
    },
    plugins: [],
}
