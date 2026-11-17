import { fileURLToPath, URL } from 'node:url'
import { existsSync, readFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command }) => {
  const keyPath = fileURLToPath(new URL('./key.pem', import.meta.url))
  const certPath = fileURLToPath(new URL('./cert.pem', import.meta.url))
  const useHttps = command === 'serve' && existsSync(keyPath) && existsSync(certPath)

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
        },
      },
      https: useHttps ? {
        key: readFileSync(keyPath),
        cert: readFileSync(certPath),
      } : undefined,
      host: '127.0.0.1',
      port: 5173,
    },
  }
})
