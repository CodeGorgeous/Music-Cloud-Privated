import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: '[local]_[hash:base64:5]',
      hashPrefix: 'prefix'
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.js']
  }
})
