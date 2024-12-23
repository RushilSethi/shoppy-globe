/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background-color)',
        container: 'var(--container-color)',
        primary: 'var(--text-primary-color)',
        secondary: 'var(--text-secondary-color)',
        accentPrimary: 'var(--accent-primary-color)',
        accentSecondary: 'var(--accent-secondary-color)',
      }
    },
  },
  plugins: [],
}

