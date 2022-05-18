export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - SUE Thesis",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      // ...i18nHead.link,
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/global.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-select" },
    { src: "~/plugins/axios" },
    { src: "~/plugins/vue-paginate", ssr: false, mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
    "@nuxtjs/pwa",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "http://localhost:3001",
  },

  i18n: {
    locales: ["en", "ar", "ku", "ba"],
    locales: [
      {
        code: "en",
        file: "en.js",
        iso: "en-US",
        isCatchallLocale: true,
      },
      {
        code: "ar",
        file: "ar.js",
        iso: "ar-AR",
      },
      {
        code: "ku",
        file: "ku.js",
        iso: "ku-IQ",
      },
    ],
    seo: true,
    defaultLocale: "en",
    langDir: "localizations/",
    baseUrl: "https://ethesis.su.edu.krd",
  },

  sitemap: {
    hostname: "https://ethesis.su.edu.krd",
    i18n: true,
    i18n: {
      locales: ["en", "ar", "ku"],
      routesNameSeparator: "___",
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  publicRuntimeConfig: {
    baseUrl: "https://ethesis.su.edu.krd",
    logoUrl: "https://su.edu.krd/sites/default/files/sue-logo-200px.png",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
