/** @type {import('prettier').Config} */
const config = {
  semi: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  endOfLine: "lf",
  singleQuote: false,
  trailingComma: "es5",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
