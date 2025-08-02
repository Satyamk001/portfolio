import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 700, // Raise the limit if necessary
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React core
          react: ['react', 'react-dom'],
          
          // Split UI components (adjust according to what you use)
          shadcn: [
            '@/components/ui/button',
            '@/components/ui/input',
            '@/components/ui/card',
            '@/components/ui/dialog',
            'lucide-react'
          ],

          // Other external libs
          vendor: [
            'react-router-dom'
          ],
        },
      },
    },
  },
}));
