import { fileURLToPath, URL } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const resolvePath = (path) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Each console owns a fixed port so they can all run at once and a
    // bookmarked localhost URL always points at the same console.
    port: 4200,
    strictPort: true,
  },
  preview: {
    port: 4200,
  },
  resolve: {
    alias: {
      '@': resolvePath('./src'),
    },
  },
})
