import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const vitePrerender = require('vite-plugin-prerender')

const PuppeteerRenderer = vitePrerender.PuppeteerRenderer

class PlatformRenderer extends PuppeteerRenderer {
  async initialize() {
    if (process.platform === 'linux') {
      const chromium = require('@sparticuz/chromium')
      const executablePath = await chromium.executablePath()
      this._rendererOptions = {
        ...this._rendererOptions,
        executablePath,
        args: [...(this._rendererOptions.args || []), ...chromium.args],
      }
    }
    return super.initialize()
  }
}

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
      renderer: new PlatformRenderer({
        headless: true,
        renderAfterElementExists: '#Hero',
        skipThirdPartyRequests: true,
      }),
    }),
  ],
})
