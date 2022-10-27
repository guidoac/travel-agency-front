/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'main-primary': '#D20442',
                'main-secondary': '#E1E1E1',
                'main-tertiary': '#8A8A8A',
                'admin-primary': '#75bf72',
                'admin-primary-light': '#b0d6b0',
                'admin-primary-dark': '#366f36',
                'admin-secondary': '#747476',
                'admin-secondary-light': '#efeff1'
            },
            fontFamily: {
                highlight: 'AA Bebas Neue'
            },
            height: {
                screen: '100vh'
            }
        }
    },
    plugins: []
};
