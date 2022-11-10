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
                'admin-primary-2': '#52b04f',
                'admin-primary-light': '#b0d6b0',
                'admin-primary-light-2': '#cde5cd',
                'admin-primary-light-3': '#ddeedd',
                'admin-primary-dark': '#366f36',
                'admin-primary-dark-2': '#295629',
                'admin-secondary': '#747476',
                'admin-secondary-light': '#bfbfc0',
                'admin-secondary-lighter': '#efeff1'
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
