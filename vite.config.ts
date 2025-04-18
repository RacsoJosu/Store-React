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
        replacement: path.resolve(path.join(__dirname, '/src/Pages')),
      },
      {
        find: '@utils',
        replacement: path.resolve(path.join(__dirname, '/src/utils')),
      },
      {
        find: '@context',
        replacement: path.resolve(path.join(__dirname, '/src/Context')),
      },
    ],
  },
})
