/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                roboto: 'Roboto',
                fira: 'Fira Code',
                popins: 'Poppins',
                sans: ['Lato', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#1fb6ff',
                seconday: '#ff7849',
                error: '#FF0000',
                warning: '#00FF00',
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
        },
    },
    plugins: [],
}
