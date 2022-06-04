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
      { name: "theme-color", content: "#00adb5" },
    ],
    link: [
      // {
      //   rel: "icon",
      //   type: "image/x-icon",
      //   href: "https://su.edu.krd/sites/default/files/sue-logo-200px.png",
      // },
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
    [
      "nuxt-twa-module",
      {
        /* module options */
        defaultUrl: "https://ethesis.su.edu.krd/",
        hostName: "ethesis.su.edu.krd",
        applicationId: "com.suethesis.example",
        launcherName: "SUE Theses",
        versionCode: 1,
        versionName: "1.0",
        statusBarColor: "#00adb5",
        // The sha256Fingerprints by is an array with one SHA-256 key string.
        // But if you have multiple you can add them to the array. More information about the website asociation:
        // https://developer.android.com/training/app-links/verify-site-associations#web-assoc
        sha256Fingerprints: ["/* your SHA-256 keys */"],
        /* optional */
        /* overwrite default location for icon */
        iconPath: "/static/icon.png",
        /* Overwrite folder where to put .wellknown */
        distFolder: ".nuxt/dist/client",
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: "https://backend.ethesis.su.edu.krd",
    baseURL: "http://localhost:3001",
  },
  server: {
    port: 4500,
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
      name: "SUE Theses",
      lang: "en",
      description:
        "Official salahaddin university thesis website, here you can find all the official Bachelor, PhD, and Masters research papers of the graduated students.",
      theme_color: "#00adb5",
      background_color: "#FFFFFF",
      icons: [
        {
          src: "/logo.png",
          sizes: "192x192",
          type: "image/png",
        },
      ],
    },
  },

  publicRuntimeConfig: {
    baseUrl: "https://ethesis.su.edu.krd",
    logoUrl: "https://su.edu.krd/sites/default/files/sue-logo-200px.png",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
