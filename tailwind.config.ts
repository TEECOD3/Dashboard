import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'button-blue': "#2993F4",
        'midnight-blue': "#00498C",
        'dark-blue': "#004062",
        'grey-white': "#E5E5E5",
        'space-cadet': "#1C334D",
        'main-blue': "#0294E2"
      },
      fontSize: {
        t12: ["0.75rem", "1.5625rem"],
        t14: ["0.875rem", "1.1025rem"],
        t24: ["1.5rem", "1.89rem"]
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "3d": "0px 12px 9px 0px #00000040"
      },
      dropShadow: {
        "3d": "0px 12px 9px 0px #00000040"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config