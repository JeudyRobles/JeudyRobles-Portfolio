import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const vitePrerender = require('vite-plugin-prerender')

const PuppeteerRenderer = vitePrerender.PuppeteerRenderer

class PlatformRenderer extends PuppeteerRenderer {
  async initialize() {
    const puppeteer = require('puppeteer')
    const options = { ...this._rendererOptions, headless: true }

    if (process.platform === 'linux') {
      const chromium = require('@sparticuz/chromium')
      const executablePath = await chromium.executablePath()
      options.executablePath = executablePath
      options.args = [...chromium.args]
    } else {
      options.args = ['--no-sandbox']
    }

    try {
      this._puppeteer = await puppeteer.launch(options)
    } catch (error) {
      console.error('[vite-plugin-prerender] Chrome launch failed:', error.message)
      throw error
    }

    return this._puppeteer
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
