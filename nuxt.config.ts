// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['usebootstrap'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/global.scss";`
        },
      },
    },
  },
})