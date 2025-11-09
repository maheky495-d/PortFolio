import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  root: "./", // keep root as project root
  build: {
    outDir: "dist/public", // ✅ frontend build output inside server folder
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
});
