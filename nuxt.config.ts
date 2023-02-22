// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
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
    }
  }
})
