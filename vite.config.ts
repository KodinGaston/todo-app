import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),  // ← Esto debe estar
    },
  },
  base: "/todo-app/",  // ← Correcto para GitHub Pages
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
})
