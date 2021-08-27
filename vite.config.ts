import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import viteStylelint from '@amatlash/vite-plugin-stylelint'

const resolve = (dir: string) => path.resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      fix: true,
      include: ['./src/**/*.[tj]s']
    }),
    viteStylelint({
      include: './src/**/*.(less|scss|css)',
    })
  ],
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  }
})
