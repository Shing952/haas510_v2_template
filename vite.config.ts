import { defineConfig } from 'vite'
import createVitePlugins from './vite/plugins'
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        app: './src/app.ts',
      },
      output: {
        format: 'es',
        dir: 'dist',
        entryFileNames: 'app.js',
      },
      external: ['gpio', 'uart'],
    },
  },
  plugins: createVitePlugins(),
})
