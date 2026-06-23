import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages project site: assets are served under /profitsReact/.
  // Without this, the build emits absolute /assets/... paths that 404 on deploy.
  base: '/profitsReact/',
  plugins: [react()],
  server: {
    open: false,
  },
})
