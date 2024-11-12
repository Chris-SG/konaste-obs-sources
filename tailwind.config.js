/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            "inter": ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif']
        },
        extend: {
            scale: {
                '1/3': '33.333333%'
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ]
}
