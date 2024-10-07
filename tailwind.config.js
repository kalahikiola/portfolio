/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'animate-duration': (value) => ({
                    animationDuration: value,
                    }),
                },
                { values: theme('transitionDuration') }
            )
        }),
    ],
}

