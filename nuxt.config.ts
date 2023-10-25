// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  imports: {
    autoImport: false,
  },
  modules: ["@pinia/nuxt"],
  runtimeConfig: {
    public: {
      FB_API_KEY: process.env.NUXT_FB_API_KEY,
      FB_AUTH_DOMAIN: process.env.NUXT_FB_AUTH_DOMAIN,
      FB_PROJECT_ID: process.env.NUXT_FB_PROJECT_ID,
      FB_STORAGE_BUCKET: process.env.NUXT_FB_STORAGE_BUCKET,
      FB_MESSAGING_SENDER_ID: process.env.NUXT_FB_MESSAGING_SENDER_ID,
      FB_APP_ID: process.env.NUXT_FB_APP_ID,
      // FB_MEASUREMENT_ID: process.env.NUXT_FB_MEASUREMENT_ID,
    },
  },
});
