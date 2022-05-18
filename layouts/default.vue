<template>
  <div>
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
    console.log(data);

    store.commit("SET_DEGREES", data.data);
  },
};
</script>
<style scoped></style>
