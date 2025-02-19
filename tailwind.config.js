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
                "main-accent": "#F24333", // Vermillion
                "main-black": "#282828", // Raisin Black
                "main-light": "#ECE5F0", // Magnolia
                "main-shadow": "#7180AC", // Glaucous
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

