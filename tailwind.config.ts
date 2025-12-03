import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "10rem",
        sm: "2rem",
        lg: "10rem",
        xl: "10rem",
        "2xl": "9rem",
      },
    },

  },
  plugins: [],
} satisfies Config;
