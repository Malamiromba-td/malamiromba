import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: {
          deep: "#1C2541",
          mid: "#3A4D7A",
        },
        ochre: "#C9973E",
        // cream: "#FAF9F6",
        cream: "#F5F0E4",
        ink: "#16181D",
        muted: "#6B7085",
        hairline: "#D9D3C4",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Black", "sans-serif"],
        sans: ["var(--font-sans)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      transitionTimingFunction: {
        overlay: "cubic-bezier(0.65,0,0.35,1)",
      },
    },
  },
  plugins: [],
};

export default config;
