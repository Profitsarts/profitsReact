/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                foreground: 'var(--foreground)',
                'muted-foreground': 'var(--muted-foreground)',
                background: 'var(--background)',
                accent: 'var(--accent)',
            },
            fontFamily: {
                sans: ['ITCAVANTGARDEGOTHICLTMEDIUM', 'Open Sans', 'sans-serif'],
                serif: ['Charter', 'Georgia', 'serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
