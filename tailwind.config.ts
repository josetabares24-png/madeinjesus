import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        coal: "#0c0b0a",
        bone: "#f3eadb",
        muted: "#b8ab99",
        ember: "#c8914c",
        brass: "#9f7138",
        cream: "#f8f1e3",
        espresso: "#2b2013"
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"]
      },
      letterSpacing: {
        editorial: "0.14em"
      },
      opacity: Object.fromEntries(
        Array.from({ length: 101 }, (_, i) => [i, (i / 100).toString()])
      ),
      backgroundImage: {
        "radial-fade": "radial-gradient(circle at 50% 36%, rgba(200,145,76,0.17), transparent 34%)"
      },
      boxShadow: {
        glow: "0 0 70px rgba(200, 145, 76, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
