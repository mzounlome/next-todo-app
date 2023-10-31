import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        phone: "500px",
        // => @media (min-width: 576px) { ... }

        tablet: { min: "501px", max: "1023px" },
        // => @media (min-width: 960px) { ... }

        desktop: { min: "1024px", max: "1800px" },
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
