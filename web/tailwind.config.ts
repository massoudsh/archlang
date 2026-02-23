import type { Config } from "tailwindcss";

// Archlang design system: warm white, charcoal, warm grey, muted olive/bronze
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          white: "#faf9f7",
          grey: "#e8e6e3",
        },
        charcoal: "#2c2a28",
        accent: {
          olive: "#6b6f4a",
          bronze: "#8b7355",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        persian: ["var(--font-persian)", "Tahoma", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
