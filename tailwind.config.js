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
        "primary-light": "#0BC8FF",
        primary: "#213757",
        secondary: "#FF6F61",
        "secondary-dark": "#EC5B4D",
        trinary: "#0BC8FF",
      },
      backgroundSize: {
        "1/2": "50%",
        "2x": "215%",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "text-effect-gradient":
          "radial-gradient(circle 200px, #000 25%, transparent 25%), linear-gradient(to right, #000 50%, #ccc 50%);",
      },
      keyframes: {
        "pointing-down": {
          "0%, 100%": {
            transform: "translateY(-15%)",
          },
          "50%": {
            transform: "translateY(15%)",
          },
        },
      },
      animation: {
        "pointing-down": "pointing-down 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
