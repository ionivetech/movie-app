import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      interfaces: `${path.resolve(__dirname, './src/interfaces/')}`,
      services: `${path.resolve(__dirname, './src/services/')}`,
      stores: `${path.resolve(__dirname, './src/stores/')}`,
      views: `${path.resolve(__dirname, './src/views/')}`,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          pagination: ['react-paginate'],
        },
      },
    },
  },
})
