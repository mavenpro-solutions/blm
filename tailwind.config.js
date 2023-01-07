/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
            },
            screens: {
                sm: '100%',
                md: '728px',
                lg: '984px',
                xl: '1240px',
            },
        },
        extend: {
            colors: {
                "color-1": "#0080c6",
                "color-2": "#1d001c",
                "color-3": "#e4e1d8",
                "color-4": "#a2a09b",
                "color-5": "#bfb8a6",
            },
            fontFamily: {
                'dm-sans': ["DM Sans", "sans-serif"],
                "dm-serif-display": ["DM Serif Display", "sans-serif"],
            },
        },
    },
    plugins: [],
}
