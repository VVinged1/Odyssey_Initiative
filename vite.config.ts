import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const basePath = process.env.PAGES_BASE_PATH ?? "/odyssey-initiative-tracker-main/";

export default defineConfig({
  base: basePath,
  build: {
    outDir: ".build",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "app.template.html"),
      },
    },
  },
  plugins: [react()],
});
