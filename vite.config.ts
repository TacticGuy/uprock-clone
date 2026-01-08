import path from "path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base:process.env.VITE_BASE_PATH || "/uprock-clone",
  build: {
    minify: false,
    sourcemap: false,
    cssCodeSplit: false,
    target: "esnext",
    ssr: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});