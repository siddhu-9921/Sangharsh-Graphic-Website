import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: true, // ✅ FIX (better than "::")
    port: 8080,
  },

  build: {
    sourcemap: false,
    outDir: "dist", // ✅ ensure correct output for Vercel
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ✅ correct
    },
  },
}));