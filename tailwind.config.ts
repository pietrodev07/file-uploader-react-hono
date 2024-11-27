import { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        error: colors.red[300],
        success: colors.green[300],
        loading: colors.blue[300],
        primary: colors.lime[300],
        button: colors.neutral[800],
        border: colors.neutral[700],
        background: colors.neutral[900],
      },
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
