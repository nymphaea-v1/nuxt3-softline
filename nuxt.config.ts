import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt3-softline/',
    head: {
      title: 'Softline',
      meta: [
        { name: 'description', content: 'Softline – ведущий поставщик IT-решений и сервисов.' }
      ]
    }
  },
  css: ['@/assets/css/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/shared.scss";'
        }
      }
    },
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(__dirname, 'assets/icons')],
        symbolId: 'icon-[name]',
        customDomId: 'svg-sprite'
      })
    ]
  }
})
