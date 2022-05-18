export const state = () => ({
  rtl: false,
  filters: [],
  degrees: [],
});
export const getters = {
  isRtl: (state) => state.rtl,
  getFilters: (state) => state.filters,
  getDegrees: (state) => state.degrees,
};
export const actions = {
  async nuxtServerInit({ commit, dispatch }, { req, app, $axios }) {
    const currentLanguage =
      app?.i18n?.locale || app?.i18n?.fallbackLocale || "en";

    if (currentLanguage === "ku" || currentLanguage === "ar")
      commit("CHNAGE_LANG", true);
    else commit("CHNAGE_LANG", false);

    await dispatch("getDegrees", $axios);
  },

  async getDegrees({ commit }, $axios) {
    const { data } = await this.$axios.get("/api/degrees/grid?pageSize=100");
    commit("SET_DEGREES", data.data);
  },
};
export const mutations = {
  CHNAGE_LANG(state, isRtl) {
    state.rtl = isRtl;
  },
  SET_FILTERS(state, filters) {
    state.filters = filters;
  },
  SET_DEGREES(state, degrees) {
    state.degrees = degrees;
  },
};
