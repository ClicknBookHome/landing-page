// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // make @ point to /src
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    // optional: you can keep port 3000 or let Vite pick another port
    host: true,
    port: 3000
  },
});
