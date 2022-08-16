import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/scrimba-airbnb-experience/',
  build: {
    outDir: 'build'
  },
  plugins: [react()]
})
