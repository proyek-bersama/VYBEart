import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palet gelap khas aplikasi musik
        base: {
          900: "#0a0a0f", // background utama
          800: "#12121a", // panel
          700: "#1a1a24", // card
          600: "#26262f", // border / hover
        },
        brand: {
          DEFAULT: "#1ed760", // hijau aksen
          dark: "#14a347",
          light: "#5cee8f",
        },
        muted: "#a1a1aa",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      spacing: {
        nav: "4.5rem", // tinggi bottom nav mobile
        player: "5.5rem", // tinggi player bar
      },
      keyframes: {
        "slide-up": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.25s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
