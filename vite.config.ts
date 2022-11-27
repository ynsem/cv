import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from '@nabla/vite-plugin-eslint'
import { resolve } from 'path'

const common = {
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
}

const plugins = [
  react(),
  eslintPlugin(),
]

export default defineConfig(() => {
  return {
    base: 'https://github.com/ynsem/cv',
    ...common,
    ...plugins
  }
})
