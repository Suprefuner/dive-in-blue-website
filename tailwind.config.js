/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#213757",
        secondary: "#FFB71A",
        trinary: "#0BC8FF",
      },
      backgroundSize: {
        "1/2": "50%",
        "2x": "215%",
      },
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "text-effect-gradient":
          "radial-gradient(circle 200px, #000 25%, transparent 25%), linear-gradient(to right, #000 50%, #ccc 50%);",
      },
    },
  },
  plugins: [],
}
