import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // MK Electra Brand Colors
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316", // Official Electra Industrial Orange
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407",
        },
        electric: {
          orange: "#FF6600",
          amber: "#F59E0B",
          cyan: "#00D2FF",
          blue: "#0066FF",
        },
        navy: {
          800: "#0f172a",
          850: "#0b1222",
          900: "#070b14", // Deep Obsidian MNC Navy
          950: "#04070d",
        },
        steel: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "blueprint-grid": "radial-gradient(circle, rgba(249, 115, 22, 0.12) 1px, transparent 1px)",
        "tech-grid-orange": "linear-gradient(to right, rgba(249, 115, 22, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(249, 115, 22, 0.06) 1px, transparent 1px)",
        "tech-gradient": "linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(0, 210, 255, 0.05) 100%)",
        "dark-radial": "radial-gradient(ellipse at top, #0f172a 0%, #070b14 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-line": "glowLine 3s ease-in-out infinite",
      },
      keyframes: {
        glowLine: {
          "0%, 100%": { opacity: "0.4", transform: "scaleX(0.95)" },
          "50%": { opacity: "1", transform: "scaleX(1.02)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
