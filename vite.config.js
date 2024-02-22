// vite.config.js
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/Desenvolvimento-WEB",
  resolve: {
    alias: {
      extensions: [".js", ".jsx"],
    },
  },
});
