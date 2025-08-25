/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // Enable dark mode via class strategy
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",     // blue-700
        secondary: "#64748b",   // slate-500
        accent: "#f59e0b",      // amber-500
        muted: "#f3f4f6",       // gray-100
        danger: "#ef4444",      // red-500
        success: "#10b981",     // emerald-500
        info: "#3b82f6",        // blue-500
        dark: "#0f172a",        // slate-900
        light: "#ffffff",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "ui-sans-serif", "system-ui"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
