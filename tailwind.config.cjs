/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: {
          default: "var(--color-text-default)",
        },
      },
      backgroundColor: {
        background: {
          default: "var(--color-background-default)",
        },
      },
    },
  },
  plugins: [],
};
