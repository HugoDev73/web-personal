module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E94560',
        secondary: '#0F3057',
        clear: '#D9EEF8',
        dark: '#111827'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
