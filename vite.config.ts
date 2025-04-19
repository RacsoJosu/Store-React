import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(path.join(__dirname, '/src')),
      },
      {
        find: '@pages',
        replacement: path.resolve(path.join(__dirname, '/src/pages')),
      },
      {
        find: '@routes',
        replacement: path.resolve(path.join(__dirname, '/src/routes')),
      },
      {
        find: '@utils',
        replacement: path.resolve(path.join(__dirname, '/src/utils')),
      },
      {
        find: '@core',
        replacement: path.resolve(path.join(__dirname, '/src/core')),
      },
    ],
  },
})
