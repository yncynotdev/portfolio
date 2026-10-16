// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxthub/core",
    "@nuxt/icon",
    "@nuxt/ui",
  ],

  app: {
    head: {
      title: "yncynotdev",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content: "Just a simple Portfolio website built using Nuxt",
        },
        {
          name: "author",
          content: "yncynotdev",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],
  vite: {
    optimizeDeps: {
      include: [
        "@vueuse/core",
        "three",
        "three/addons/loaders/GLTFLoader.js",
        "three/examples/jsm/Addons.js",
      ],
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  icon: {
    mode: "css",
    cssLayer: "base",
  },

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },

  routeRules: {
    "/": { prerender: true },
  },
});
