import { defineConfig } from 'vite'

// base './' para que funcione en GitHub Pages; el build va a docs/
export default defineConfig({
  base: './',
  build: { outDir: 'docs' }
})
