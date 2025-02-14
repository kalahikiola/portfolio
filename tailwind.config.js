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
            keyframes: {
                rotate_in: {
                    '0%': { transform: 'rotate(90.0deg)' },
                    '100%': { transform: 'rotate(0.0deg)' },
                },
                rotate_out: {
                    '0%': { transform: 'rotate(0.0deg)' },
                    '100%': { transform: 'rotate(90.0deg)' },
                },
            },
            animation: {
                'rotate-in': 'rotate_in 0.5s ease 1 forwards',
                'rotate-out': 'rotate_out 0.5s ease 1 forwards',
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

