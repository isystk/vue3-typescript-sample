import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), pages()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})