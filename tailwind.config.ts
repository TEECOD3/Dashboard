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
    // fontSize: {
    //   t12: ["0.75rem", "0.9375rem"],
    //   t14: ["0.875rem", "1.1025rem"],
    //   t16: ["1rem", "1.26rem"],
    //   t18: ["1.125rem", "1.36125rem"],
    //   t24: ["1.5rem", "1.89rem"]
    // },
    extend: {
      colors: {
        'button-blue': "#2993F4",
        'midnight-blue': "#00498C",
        'light-main-blue': "#35B7FD",
        'dark-blue': "#004062",
        'grey-white': "#E5E5E5",
        'grey-black': "#484848",
        'space-cadet': "#1C334D",
        'main-blue': "#0294E2",
        'outer-space': "#484848",
        'camel': "#C29E62",
        'pale': "#B2D8F7",
        'alice-blue': "#F3F8FC",
        azure: "#447CBB",
        'charleston': "#292D32",
        'primary-30': "#F5FBFF",
        'primary-200': "#88CBF9",
        'primary-800': "#204E76",
        'primary-900': "#13344F",
        'umber': "#7B6941",
        crayola: "#FFC645",
        ucla: "#FFB400",
        'cosmic-latte': "#FFF7E5",
        cultured: "#F5F5F5",
        "red-400": "#A82430"
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