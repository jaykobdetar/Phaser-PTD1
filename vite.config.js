import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        game: fileURLToPath(new URL('./index.html', import.meta.url)),
        pokecenter: fileURLToPath(new URL('./pokecenter.html', import.meta.url)),
      },
      output: { manualChunks: { phaser: ["phaser"] } },
    },
  },
});
