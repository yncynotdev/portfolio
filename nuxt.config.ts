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
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
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
    preset: "cloudflare_pages",
  },

  runtimeConfig: {
    public: {
      bucket: "",
    },
  },
});
