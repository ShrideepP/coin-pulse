/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'accent': '#2196F3',
                'accent-dark': '#0C85E9',
                'primary': '#EBEBEB',
                'dark-primary': '#1F1F1F',
                'secondary': '#D6D6D6',
                'dark-secondary': '#3D3D3D',
                'dominant': '#121212',
                'dark-dominant': '#F5F5F5',
                'compliment': '#3D3D3D',
                'dark-compliment': '#CCCCCC',
                'background': '#F5F5F5',
                'dark-background': '#121212',
            },
            fontSize: {
                'sm': '0.828rem',
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
            }, 
            gridTemplateColumns: {
                '14': 'repeat(14, minmax(0, 1fr))'
            },
        },
    },
    plugins: [],
};