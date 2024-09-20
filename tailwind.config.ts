import type { Config } from "tailwindcss";

import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["dark"],
    styled: true,
  },
  safelist: [
    "text-pink-500",
    "group-hover:text-pink-500",
    "text-green-500",
    "group-hover:text-green-500",
    "text-red-500",
    "group-hover:text-red-500",
    "text-blue-500",
    "group-hover:text-blue-500",
    "text-orange-500",
    "group-hover:text-orange-500",
    "items-center",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        semiblack: {
          DEFAULT: "#222",
        },
        cinza: {
          DEFAULT: "#CBCBCD",
          border: "#e1e1e",
          text: "#6b6b6b"
        },
        primary: {
          // DEFAULT: "#fc5a0a",
          DEFAULT: "#f5811e",
          hover: "#d96900",
        },
        secondary: {
          DEFAULT: "#293d93",
          hover: "#1a2c6b",
        },
        transwhite: {
          DEFAULT: "#ffffff75",
        },
      }
      // screens: {
      //   tall: { raw: "(min-height: 800px)" },
      // },
    },
    fontFamily: {
      heading: ["var(--font-gotham)"],
      body: ["var(--font-poppins)"],
      category: ["var(--font-bebas)"],
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
  plugins: [require("daisyui")],
};
export default config;
