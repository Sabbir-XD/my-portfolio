/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      height: {
        "screen-dvh": "100dvh", // this fixes mobile height issue
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3B82F6", // Blue-500
          secondary: "#1E293B", // Slate-800
          accent: "#F59E0B", // Amber-500
          neutral: "#1E293B", // Slate-800
          "base-100": "#F1F5F9", // Light bg (Slate-100)
          "base-200": "#E2E8F0", // Light gray bg (Slate-200)
          "base-content": "#1E293B", // Slate text
          info: "#0EA5E9", // Sky-500
          success: "#10B981", // Green-500
          warning: "#F59E0B", // Amber-500
          error: "#EF4444", // Red-500
        },
      },
      {
        dark: {
          primary: "#60A5FA", // Blue-400
          secondary: "#1E40AF", // Blue-800
          accent: "#FBBF24", // Amber-400
          neutral: "#111827", // Gray-900
          "base-100": "#1F2937", // Slate-800
          "base-200": "#111827", // Even darker bg
          "base-content": "#F3F4F6", // Light text
          info: "#38BDF8", // Sky-400
          success: "#22C55E", // Green-400
          warning: "#FACC15", // Yellow-400
          error: "#F87171", // Red-400
        },
      },
    ],
    darkTheme: "dark", // Default dark mode theme
  },
};
