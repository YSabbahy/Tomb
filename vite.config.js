import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Lets the GitHub Pages deploy workflow build with the correct
  // "/<repo-name>/" base path via the VITE_BASE env var, while local dev
  // and any other host still default to "/".
  base: process.env.VITE_BASE || '/',
})
