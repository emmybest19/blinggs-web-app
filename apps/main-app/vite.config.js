import { fileURLToPath, URL } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const resolvePath = (path) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    strictPort: true,
  },
  preview: {
    port: 5173,
  },
  resolve: {
    alias: {
      '@': resolvePath('./src'),
      '@app': resolvePath('./src/app'),
      '@features': resolvePath('./src/features'),
      '@shared': resolvePath('./src/shared'),
    },
  },
})
