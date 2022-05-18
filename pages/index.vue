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
};
</script>
