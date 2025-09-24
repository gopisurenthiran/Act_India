/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0071BB",
        secondary: "#100FBC",
        accent: "#f59e0b",
        muted: "#f3f4f6",
        danger: "#ef4444",
        success: "#10b981",
        info: "#3b82f6",
        dark: "#0f172a",
        light: "#ffffff",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"], // 🔹 Primary
        secondary: ["Inter", "sans-serif"], // 🔹 Secondary
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #0071BB, #100FBC)",
      },
    },
  },
  plugins: [],
};
