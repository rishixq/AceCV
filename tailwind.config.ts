import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-delayed": {
          "0%": { opacity: "0" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "zoom-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "bounce-in": {
          "0%": { transform: "translateY(-100px)", opacity: "0" },
          "60%": { transform: "translateY(10px)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-up-delayed": {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "70%": { transform: "translateY(10px)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-out",
        "fade-in-delayed": "fade-in-delayed 1.5s ease-out",
        "zoom-in": "zoom-in 0.8s ease-out",
        "bounce-in": "bounce-in 1.2s ease-out",
        "slide-up-delayed": "slide-up-delayed 1s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
