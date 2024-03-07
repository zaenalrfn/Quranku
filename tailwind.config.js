/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text_color_bold_1: "var( --color-bold-1)",
        text_color_normal_1: "var( --color-normal-2)",
        text_color_2: "var(--color-2)",
      },
    },
  },
  plugins: [],
};
