import { fileURLToPath, URL } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const resolvePath = (path) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolvePath('./src'),
      '@app': resolvePath('./src/app'),
      '@features': resolvePath('./src/features'),
      '@shared': resolvePath('./src/shared'),
    },
  },
})
