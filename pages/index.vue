<template>
  <div class="home-container">
    <HomeHeading />
    <DegreesGraduateNumbers :degrees="degrees" />
    <Collages />
    <ThesisDegreeNews :latestTheses="latestTheses" />
    <Seperator />
    <AboutSalahaddin />
  </div>
</template>

<script>
export default {
  name: "index-page",
  data: () => ({
    degrees: [],
    latestTheses: [],
  }),
  async fetch() {
    const { data } = await this.$axios.get("/api/home");
    const { degrees, latestTheses } = data;
    this.degrees = degrees;
    this.latestTheses = latestTheses;
  },
  head() {
    return {
      title: this.$t("home.title"),
      link: [...this.$nuxtI18nHead({ addSeoAttributes: true }).link],
      meta: [
        ...this.$nuxtI18nHead({ addSeoAttributes: true }).meta,
        {
          hid: "description",
          name: this.$t("home.pageName"),
          content: this.$t("home.description"),
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "website",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("home.title"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("home.description"),
        },
        {
          hid: "og:image",
          name: "og:image",
          content: `${this.$config.logoUrl}`,
        },
        {
          hid: "og:url",
          name: "og:url",
          content: `${this.$config.baseUrl}`,
        },
        // twitter meta tags
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.$t("home.pageName"),
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t("home.description"),
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: `${this.$config.logoUrl}`,
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: `${this.$config.baseUrl}`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.home-container {
  overflow: hidden;
}
</style>
