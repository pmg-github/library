/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./src/**/*.{js,vue,ts}",
    "./src/**/*.stories.{js,ts}",
    "./.storybook/**/*.{js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  safelist: [
    {
      pattern:
        /text-(red|blue|green|yellow|purple|gray|indigo|pink|pmg)-(700|800)/,
      variants: ["hover", "focus"], // Voor varianten zoals hover en focus
    },
    {
      pattern:
        /bg-(red|blue|green|yellow|purple|gray|indigo|pink|pmg)-(100|200|400)/,
      variants: ["hover"],
    },
    {
      pattern: /text-pmg-(50|100|200|300|400|500|600|700|800|900)/,
      variants: ["hover", "focus"],
    },
    {
      pattern: /bg-pmg-(50|100|200|300|400|500|600|700|800|900)/,
      variants: ["hover", "focus"],
    },
    {
      pattern: /border-pmg-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /ring-pmg-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /col-span-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ["sm", "@6xl"],
    },
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1792px",
      // => @media (min-width: 1792px) { ... }
    },
    extend: {
      colors: {
        pmg: {
          50: "#ECF1F8",
          100: "#DAE3F1",
          200: "#B4C6E4",
          300: "#8FAAD6",
          400: "#698EC9",
          500: "#4472BB",
          600: "#365B96",
          700: "#26406A",
          800: "#1B2D4B",
          900: "#0E1725",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
