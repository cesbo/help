module.exports = {
    darkMode: 'class',
    plugins: [
        require('@headlessui/tailwindcss'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
    safelist: [
        'bg-white',
        'dark:bg-zinc-800',
        'text-black',
        'dark:text-white',
    ],
}
