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
        "DIRPPG": "url(/assets/DIRPPG-BG.png)"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cinzento: "#D9D9D980",
        cinzaquente: "#505050",
        cinzabg: "#1E1E1E",
      },
    },
  },
  plugins: [],
};
export default config;
