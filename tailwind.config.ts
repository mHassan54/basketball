import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "card-radial":
          "radial-gradient(100% 100% at 50% 100%, rgba(187, 85, 255, 0.2) 0%, rgba(57, 10, 85, 0.2) 100%)",
        "nav-gradient":
          "linear-gradient(268.86deg, #430A65 0.17%, #6F0BB1 99.83%)",
      },
      borderImage: {
        "card-gradient":
          "linear-gradient(268.86deg, #430A65 0.17%, #6F0BB1 99.83%)",
        "border-gradient":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(0deg, rgba(240, 81, 255, 0.2), rgba(240, 81, 255, 0.2))",
      },
      colors: {
        background: "var(--background)",
        inputText: "#8E08DD0D",
        foreground: "var(--foreground)",
        borderLight: "#ffffff26",
        textLight: "#FFFFFF80",
        alert: "#FFDADA",
        plcaeholderWhite: "#FFFFFFB2",
        borderPurple: "#430A65",
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        whiteLight: "#FFFFFFCC",
        black: "#000",
        textGrey: "#CACFD8",
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
        standard: ["12px", { lineHeight: "16px" }],
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
