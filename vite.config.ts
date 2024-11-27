import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const srcAlias = {
  find: "@",
  replacement: resolve(__dirname, "src"),
};

// https://vite.dev/config/
export default defineConfig({
  resolve: { alias: [srcAlias] },
  plugins: [react()],
});
