import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // host: '10.0.60.187',
    host: '69.62.117.207',
    port: '7585',
  },
})
