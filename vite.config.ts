import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['/favicon.png'],
      strategies: 'generateSW',
      base: '/',
      manifest: {
        name: 'Movie Application',
        short_name: 'Movie App',
        theme_color: '#F6F8FD',
        background_color: '#F6F8FD',
        start_url: '.',
        icons: [
          {
            src: 'icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: 'icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'icon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,ts,css,scss,html,ico,png,svg,json,tsx,txt,woff2}'],
      },
    }),
  ],
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
