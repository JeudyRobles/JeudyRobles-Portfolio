import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const vitePrerender = require('vite-plugin-prerender')

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.resolve('dist'),
      routes: ['/'],
      server: {
        host: 'localhost',
        port: 8001,
      },
    }),
  ],
})
