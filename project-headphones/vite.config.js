import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: {
    port: 5173,
    open: false
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        // live, pointer-driven Three.js poster linked from the #poster section
        motion: 'docs/marketing/motion/animation-poster/index-threejs.html'
      }
    }
  }
});
