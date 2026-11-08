import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Backward-compatible aliases: existing components keep working.
        indigo: {
          deep: "#102A43",
          mid: "#174EA6",
        },
        ochre: "#D62828",
        cream: "#FFFFFF",
        ink: "#102A43",
        muted: "#526579",
        hairline: "#DCE4EF",
        // Explicit brand tokens for new components.
        brand: {
          blue: "#174EA6",
          red: "#D62828",
          white: "#FFFFFF",
          navy: "#102A43",
        },
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
