import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "DIRPPG": "url(/assets/DIRPPG-BG.png)",
        "BG2": "url(/assets/BG2.png)"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cinzento: "#D9D9D980",
        cinzaquente: "#505050",
        cinzabg: "#1E1E1E",
        cinzatexto: "#2D2B2B",
        cinzafooter: "#0B0912",
      },
    },
  },
  plugins: [],
};
export default config;
