import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // dev server port
    open: true, // auto-open browser on start
  },
  build: {
    outDir: "dist", // build output folder
    emptyOutDir: true, // ensures old files are cleared on rebuild
  },
});
