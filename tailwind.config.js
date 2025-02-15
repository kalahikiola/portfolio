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
                "main-accent": "#CE4257",
                "main-black": "#191919",
                "main-white": "#f8f7f5",
                "project-bg": "#BBCBCB",
            },
            keyframes: {
                slide_up: {
                    '0%': { top: '100%' },
                    '100%': { top: '0%' },
                },
                slide_down: {
                    '0%': { top: '0%' },
                    '100%': { top: '100%' },
                },
                scale_up: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.1)' },
                },
                scale_down: {
                    '0%': { transform: 'scale(1.1)' },
                    '100%': { transform: 'scale(1)' },
                },
            },
            animation: {
                'slide-up': 'slide_up 0.18s ease-out 1 forwards',
                'slide-down': 'slide_down 0.1s ease-out 0.25s 1 forwards',
                'scale-up': 'scale_up 0.18s ease-out 1 forwards',
                'scale-down': 'scale_down 0.18s ease-out 1 forwards',
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

