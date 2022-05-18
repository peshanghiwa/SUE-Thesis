export default function ({ $axios, app, error }) {
  $axios.onRequest((config) => {
    const currentLanguage =
      app.i18n?.locale || app.i18n?.fallbackLocale || "en";
    config.headers = config.headers || {};
    config.headers["x-localization"] = currentLanguage;
  });

  // $axios.onError((err) => {
  //   if (error?.response?.status === 500) {
  //     error({ statusCode: 500, message: "Server error" });
  //   }
  // });
}
