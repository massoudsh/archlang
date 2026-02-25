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
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        persian: ["var(--font-persian)", "Tahoma", "sans-serif"],
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
