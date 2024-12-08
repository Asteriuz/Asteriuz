import type { Config } from "tailwindcss";

import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    // themes: ["dark"],
    styled: false,
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
      boxShadow: {
        "float": "0px 5px 20px 0px #4545601A",
      },
      colors: {
        semiblack: {
          DEFAULT: "#333",
        },
        cinza: {
          DEFAULT: "#e5e5e5",
          border: "#e1e1e",
          text: "#6b6b6b",
        },
        primary: {
          DEFAULT: "#e22f24",
          // DEFAULT: "#f06464",
          hover: "#9a0a0a",
        },
        secondary: {
          DEFAULT: "#FF6500",
          hover: "#e65e00",
        },
        terciary: {
          DEFAULT: "#FF8A08",
          hover: "#e57b07",
        },
        transwhite: {
          DEFAULT: "#ffffff75",
        },
      },
      screens: {
        tall: { raw: "(min-height: 700px)" },
      },
    },
    fontFamily: {
      heading: ["var(--font-gotham)"],
      body: ["var(--font-poppins)"],
      // category: ["var(--font-bebas)"],
    },
    fontWeight: {
      normal: "400",
      bold: "700",
      medium: "500",
      semibold: "600",
    },
  },
  plugins: [require("daisyui")],
};
export default config;
