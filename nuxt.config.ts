// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['usebootstrap'],
  css: [
    'animate.css/animate.min.css', // 引入 Animate.css
  ],
  // app: {
  //   head: {
  //     script: [
  //       {
  //         src: '/_nuxt/assets/js/wow.min.js',  // 使用 static 目录下的路径
  //         type: 'text/javascript',
  //         defer: true
  //       }
  //     ]
  //   }
  // },
  app: {
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/wowjs@1.1.2/dist/wow.min.js',  // 确保这里是非模块化的版本
          type: 'text/javascript',  // 不使用 type='module'
          defer: true
        }
      ]
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ['wow.min.js']  // 排除 wow.min.js 文件不进行模块化处理
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/global.scss";`
        },
      },
    },
  },
})