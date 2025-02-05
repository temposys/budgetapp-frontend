import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '//budgetapp-frontend/',
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
})
