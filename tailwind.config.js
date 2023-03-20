/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "fil-space": "calc(100vh - 36px - 2.5rem)",
      },
      colors: {
        buttonPrimary: "#2974AF",
        primary: "#2B5FE4",
        secondary: "#C8A52A",
      },
      backgroundImage: {
        btnGradPrimary:
          "linear-gradient(91.68deg, #DB6B2D 3.19%, #9D5819 99.37%)",
      },
      borderColor: {
        secondary: "#e5e5e5",
      },
      textColor: {
        overlay: "#919599",
        secondary: "#2C3642",
        info: "#13578D",
      },
      fontFamily: {
        jawa: ["var(--font-jawa)"],
        nunito: ["var(--font-nunito)"],
      },
    },
  },
  plugins: [],
};
