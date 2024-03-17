import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1.5': '1.5rem',
        '7': '7rem',
      },
      colors: {
        'background': '#f5f5ef',
        'links': '#4545e3'
      },
    },
  },
  plugins: [],
};
export default config;
