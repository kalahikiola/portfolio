/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "main-accent": "#F2613F",
                "main-black": "#191919",
                "main-white": "#f8f7f5",
                "project-bg": "#56667A",
            },
        },
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

