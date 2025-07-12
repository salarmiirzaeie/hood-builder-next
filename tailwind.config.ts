// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // Add other paths where you use Tailwind classes, e.g., if you have a `src` directory
  ],
  theme: {
    extend: {
      // You can extend other theme properties here if needed
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"), // For aspect-w/h utilities
    // If you need a plugin to hide scrollbars with Tailwind utilities:
    // require('tailwind-scrollbar-hide'), // Install with `npm install tailwind-scrollbar-hide`
  ],
};

export default config;
