/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: "#00022b",
          cyan: "#00b8d9",
        },
        accent: "#fbbf24",
        whatsapp: "#25D366",
        contact: "#ff9f00",
        button: {
          primary: "#fbbf24",
          hover: "#f59e0b",
          whatsapp: "#25D366",
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
      fontFamily: {
        sans: ["Cairo", "Poppins", "sans-serif"],
        heading: ["Cairo", "sans-serif"],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #fbbf24, #f59e0b)',
      },
    },
  },
  plugins: [],
}

