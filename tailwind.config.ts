import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Accent token (class name kept as "gold" for compatibility)
        gold: {
          DEFAULT: "#4DA3FF",
          light: "#4DA3FF",
          dark: "#0B3D91",
          warm: "#1E6DDB",
        },
        brand: {
          amber: "#4DA3FF",
          coral: "#1E6DDB",
          violet: "#0B3D91",
          azure: "#4DA3FF",
          cyan: "#4DA3FF",
          gold: "#1E6DDB",
        },
        // Dark surfaces remapped from black/navy → professional blue
        dark: {
          DEFAULT: "#0B3D91",
          sec: "#1456B8",
          card: "#1456B8",
          slate: "#1E6DDB",
        },
        primary: {
          dark: "#0B3D91",
          DEFAULT: "#1456B8",
          bright: "#1E6DDB",
          accent: "#4DA3FF",
        },
        surface: {
          light: "#EAF4FF",
          muted: "#F5FAFF",
        },
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        inter:  ["Inter",  "sans-serif"],
        arabic: ["Cairo", "Tajawal", "sans-serif"],
      },
      animation: {
        shimmer:     "shimmer 3.5s ease-in-out infinite",
        float:       "float 5s ease-in-out infinite",
        "gold-pulse":"gold-pulse 2s ease-in-out infinite",
        "logo-glow": "logo-glow 4s ease-in-out infinite alternate",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #0B3D91 0%, #1456B8 50%, #1E6DDB 100%)",
        "brand-gradient": "linear-gradient(135deg, #0B3D91 0%, #1456B8 50%, #4DA3FF 100%)",
        "azure-gradient": "linear-gradient(135deg, #1456B8, #4DA3FF)",
        "violet-gradient": "linear-gradient(135deg, #0B3D91, #1456B8)",
      },
    },
  },
  plugins: [],
};
export default config;
