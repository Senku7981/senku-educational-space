import { fileURLToPath } from 'url';

const config = defineNuxtConfig({
  modules: ['@vueuse/nuxt', 'nuxt-svgo', 'dayjs-nuxt'],
  css: ['@/assets/styles/index.scss'],
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      // API_URL: process.env.API_URL,
    },
  },

  svgo: {
    svgo: false,
    defaultImport: 'component',
  },

  alias: {
    '@assets': fileURLToPath(new URL('./assets', import.meta.url)),
    '@main': fileURLToPath(new URL('./main', import.meta.url)),
    '@ui': fileURLToPath(new URL('./main/ui', import.meta.url)),
    '@components': fileURLToPath(new URL('./main/components', import.meta.url)),
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
						@import "@/assets/styles/variables.scss";
						@import "@/assets/styles/mixins.scss";
					`,
        },
      },
    },
  },
});

export default config;
