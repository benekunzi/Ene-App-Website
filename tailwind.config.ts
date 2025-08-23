import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 10px 30px rgba(0,0,0,0.15)',
      },
      backgroundImage: {
        'grid': "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0)"
      }
    },
  },
  plugins: [],
};
export default config;
