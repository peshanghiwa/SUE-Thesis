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
      title: "Home",
      link: [...this.$nuxtI18nHead({ addSeoAttributes: true }).link],
      meta: [
        ...this.$nuxtI18nHead({ addSeoAttributes: true }).meta,
        {
          hid: "description",
          name: "Salahaddin University Theses Website",
          content:
            "A Hub for all the Salahaddin University Theses, where you can explore and find informations and scientific researches about any topics.",
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "website",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "Salahaddin University Theses Website",
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "A Hub for all the Salahaddin University Theses, where you can explore and find informations and scientific researches about any topics.",
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
          content: "Salahaddin University Theses Website",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "A Hub for all the Salahaddin University Theses, where you can explore and find informations and scientific researches about any topics.",
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
