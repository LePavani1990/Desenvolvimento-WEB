// vite.config.js
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/Desenvolvimento-WEB/", // Altere para corresponder ao seu subdiretório, se aplicável
  plugins: [react()],
  resolve: {
    alias: {
      extensions: [".js", ".jsx"],
    },
  },
});
