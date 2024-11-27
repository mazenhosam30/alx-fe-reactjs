/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Specify where Tailwind should scan for class names
  theme: {
    extend: {}, // Customize the theme if needed
  },
  plugins: [], // Add plugins if needed
};

["purge", "darkMode", "variants"]