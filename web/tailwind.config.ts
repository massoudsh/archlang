import type { Config } from "tailwindcss";

// فا design system — modern, calm, authoritative
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
          white: "#fafaf8",
          grey: "#eae8e5",
          "grey-deep": "#d4d1cc",
        },
        charcoal: "#1a1918",
        accent: {
          olive: "#5c6148",
          bronze: "#7a6b5a",
        },
        // Bold modern palette (redesign)
        espresso: {
          DEFAULT: "#211712",
          light: "#332419",
          border: "#3d2c20",
        },
        coral: {
          DEFAULT: "#f97316",
          dark: "#c2570c",
          light: "#fb923c",
        },
        pastel: {
          pink: "#f3dce2",
          "pink-deep": "#e9c3cd",
          blue: "#dbe8f3",
          "blue-deep": "#c2d9ec",
          peach: "#f5e3cf",
          "peach-deep": "#ecd0ac",
          yellow: "#f3e6ab",
          mint: "#dbe9df",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        persian: ["var(--font-persian)", "Tahoma", "sans-serif"],
        display: ["var(--font-display)", "var(--font-persian)", "Tahoma", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      borderRadius: {
        "arch-sm": "var(--radius-sm)",
        "arch-md": "var(--radius-md)",
        "arch-lg": "var(--radius-lg)",
        "arch-xl": "var(--radius-xl)",
      },
      boxShadow: {
        "arch-sm": "var(--shadow-sm)",
        "arch-md": "var(--shadow-md)",
        "arch-lg": "var(--shadow-lg)",
      },
    },
  },
  plugins: [],
} satisfies Config;
