/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#D20442',
                secondary: '#E1E1E1',
                tertiary: '#8A8A8A'
            }
        }
    },
    plugins: []
};
