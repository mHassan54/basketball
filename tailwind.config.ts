import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        borderLight: "#ffffff26",
        alert: "#FFDADA",
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        whiteLight: "#FFFFFFCC",
        black: "#000",
        dark: "#4D4D4D",
        primary: "#4EC3EC",
        secondary: "#95FDA8",
        secondaryLight: "#2F3B82",
        danger: "#FD4E4E",
        primaryLight: "#E5EFFF",
        lightOrange: "#FAF6F3",
        light: "#989898",
        bgLight: "#F9F9FB",
        success: "#55C753",
        borderSecondary: "#ADABAB",
        gray: "#999999",
        textGray: "#828282",
        bgGray: "#FAFAFA",
        bgSidebar: "#EEF2F7",
        linkBorder: "#E8E8E8",
        primaryGray: "#4C4C4C",
        grayLight: "#FBFBFB",
        textPrimary: "#E1891F",
        dangerBorder: "#DA1E28",
        hoverBg: "#FEA83F26",
        bgInput: "#F6F7FA",
        bgHero: "#F2FFFA",
        textLink: "#BFBFBF",
      },
      fontFamily: {
        slamDunk: ["Slam Dunk", "sans-serif"],
      },
      fontSize: {
        // header: ["20px", { lineHeight: "22px" }],
      },
      letterSpacing: {
        normal: "0%",
      },
      fontWeight: {
        normal: "400",
      },
    },
  },
  plugins: [],
} satisfies Config;
