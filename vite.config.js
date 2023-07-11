import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";
import prettierPlugin from "vite-plugin-prettier";

// https://vitejs.dev/config/

const eslintOptions = {
  extensions: ["js", "react"],
};

export default defineConfig({
  plugins: [react(), eslintPlugin(eslintOptions), prettierPlugin()],
  server: {
    fs: {
      strict: false,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
