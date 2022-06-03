<template>
  <div :dir="$store.getters.isRtl ? 'rtl' : 'ltr'">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
    $axios,
  }) {
    const { data } = await $axios.get("/degrees/grid?pageSize=100");

    store.commit("SET_DEGREES", data.data);
  },
  data() {
    return {
      change: false,
    };
  },
  computed: {
    dir() {
      return this.$store.getters.isRtl;
    },
  },
};
</script>
<style scoped></style>
