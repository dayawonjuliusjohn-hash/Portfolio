import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F3F4F1",      // drawing sheet
        ink: "#16202B",        // plotted line
        concrete: "#CDD0CB",   // poured grey
        slab: "#E4E6E2",       // lighter grey
        mark: "#1D4ED8",       // takeoff markup blue
        bar: "#C2410C",        // rebar
      },
      fontFamily: {
        display: ["Barlow Condensed", "Arial Narrow", "sans-serif"],
        body: ["Public Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
