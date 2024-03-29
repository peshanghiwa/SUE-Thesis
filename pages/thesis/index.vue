<template>
  <div class="container">
    <h1 class="page-title">
      <strong> {{ $t("thesis.title") }} </strong>
    </h1>
    <div class="inputs-container">
      <div class="input-container">
        <v-select
          :placeholder="$t('thesis.allCollages')"
          :options="collages"
          :dir="$store.getters.isRtl ? 'rtl' : 'ltr'"
          label="name"
          :reduce="(collage) => collage.collage_id"
          v-model="selectedCollage"
        >
          <template #no-options="{ search, searching, loading }">
            {{ $t("thesis.noOption") }}
          </template>
        </v-select>
      </div>
      <div class="input-container">
        <v-select
          :dir="$store.getters.isRtl ? 'rtl' : 'ltr'"
          :placeholder="$t('thesis.allDepartments')"
          :options="
            backupDepartments.length > 0 ? backupDepartments : departments
          "
          label="name"
          :reduce="(department) => department.id"
          v-model="selectedDepartment"
        ></v-select>
      </div>
      <div class="input-container">
        <v-select
          :placeholder="$t('thesis.allDegreesPlaceholder')"
          :options="degrees"
          :dir="$store.getters.isRtl ? 'rtl' : 'ltr'"
          label="name"
          :reduce="(degree) => degree.id"
          v-model="selectedDegree"
        ></v-select>
      </div>

      <div class="input-container">
        <v-select
          :placeholder="$t('thesis.allSupervisors')"
          :options="supervisors"
          :dir="$store.getters.isRtl ? 'rtl' : 'ltr'"
          label="name"
          :reduce="(supervisor) => supervisor.id"
          v-model="selectedSupervisor"
        >
          <template #no-options="{ search, searching, loading }">
            {{ $t("thesis.noOption") }}
          </template>
        </v-select>
      </div>
      <div class="input-container">
        <input
          :placeholder="$t('thesis.searchPlaceholder')"
          v-model="selectedSearch"
          class="search-input"
          type="text"
        />
      </div>
      <div class="input-container">
        <button class="search-button" @click="onSearchHandle">
          Apply Filter
        </button>
      </div>
    </div>
    <div class="newses-container">
      <div
        v-for="(thesis, index) in theses"
        :key="index"
        class="news-container"
      >
        <div class="degree-container">
          {{ thesis.degree_name }}
        </div>
        <div class="image-container">
          <img
            class="image"
            :src="
              `https://backend.ethesis.su.edu.krd/${thesis.image_url}` ||
              'https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png'
            "
            alt=""
          />
        </div>
        <div class="content-container">
          <div>
            <h3 class="content-title">
              {{ trancate(thesis.title) }}
            </h3>
            <small class="author-container">
              <strong class="author">{{ thesis.student_name }}</strong>
              <br />
              {{ thesis.collage_name }},
              <br />
              {{ thesis.department_name }}
            </small>
          </div>
          <nuxt-link
            :to="localePath(`/thesis/${thesis.slug}`)"
            class="full-article-button"
            >{{ $t("home.seeFullArticle") }}</nuxt-link
          >
        </div>
      </div>
      <div v-if="theses.length === 0"></div>
      <h3 v-if="theses.length === 0" class="no-results">
        {{ $t("thesis.noResults") }}
      </h3>
    </div>
    <client-only>
      <paginate
        v-model="pagination.currentPage"
        :page-count="pagination.totalPages"
        :page-range="3"
        :margin-pages="2"
        :click-handler="clickCallback"
        :prev-text="
          !$store.getters.isRtl
            ? `<img  src='/paginate-left.svg' height='14' width='14' />`
            : `<img src='/paginate-right.svg' height='14' width='14' />`
        "
        :next-text="
          $store.getters.isRtl
            ? `<img  src='/paginate-left.svg' height='14' width='14' />`
            : `<img src='/paginate-right.svg' height='14' width='14' />`
        "
        :container-class="'pagination'"
        :page-class="'page-item'"
        :active-class="`active-page`"
        :prev-class="`prev-page`"
        :next-class="`next-page`"
      >
      </paginate>
    </client-only>
  </div>
</template>
<script>
export default {
  watchQuery: [
    "page",
    "search",
    "collage",
    "department",
    "degree",
    "supervisor",
  ],
  async asyncData({ query, $axios }) {
    try {
      const {
        page = 1,
        degree,
        search,
        department,
        collage,
        supervisor,
      } = query;
      let url = `/api/theses/grid?page=${page - 1}&pageSize=20`;
      if (degree) url += `&degree=${degree}`;
      if (search) url += `&search=${search}`;
      if (department) url += `&department=${department}`;
      if (collage) url += `&collage=${collage}`;
      if (supervisor) url += `&supervisorId=${supervisor}`;

      const { data } = await $axios.get(url);

      const response = await $axios.get("/api/home/thesesPage");

      const degrees = response.data.degrees.map((degree) => ({
        id: degree.id,
        name: degree.name,
      }));
      const collages = response.data.collages;

      const selectedCollage = collages.find(
        (item) => item.collage_id === Number(collage)
      );

      const backupDepartments = selectedCollage
        ? selectedCollage.departments.map((department) => ({
            id: department.id,
            name: department.department_name,
          }))
        : [];

      let selectedDepartment = "";
      if (collage && department) {
        selectedDepartment =
          collages
            .find((item) => item.collage_id === Number(collage))
            .departments?.find((item) => item.id === Number(department))
            ?.department_name ?? "";
      }

      const supervisors = response.data.supervisors;
      let selectedSupervisor = "";
      if (supervisor) {
        selectedSupervisor = supervisors.find(
          (item) => item.id === Number(supervisor)
        );
      }
      return {
        theses: data.data,
        degrees,
        collages,
        supervisors,
        pagination: {
          currentPage: Number(page),
          totalPages: data.pages,
          pageSize: 20,
          totalTheses: data.records,
        },
        selectedDegree: degrees.find((item) => item.id === Number(degree)),
        selectedCollage: selectedCollage
          ? {
              id: selectedCollage.collage_id,
              name: selectedCollage.name,
            }
          : [],
        backupDepartments,
        selectedDepartment,
        selectedSearch: search,
        selectedSupervisor,
      };
    } catch (err) {
      console.log(err);
      // error({ statusCode: 404, message: "Page Not Found" });
    }
  },
  methods: {
    async clickCallback(pageNumber) {
      const currentLocale = this.$i18n.locale === "en" ? "" : this.$i18n.locale;
      const path =
        currentLocale === "" ? "/thesis" : `/${currentLocale}/thesis`;
      this.$router.push({
        path,
        query: { page: Number(pageNumber) },
      });
    },
    trancate(str) {
      const length = 200;
      if (str.length > length) {
        return str.substring(0, length - "...".length) + "...";
      } else {
        return str;
      }
    },
    onSearchHandle() {
      const query = {};
      if (this.selectedCollage) query.collage = this.selectedCollage;
      if (this.selectedDepartment) query.department = this.selectedDepartment;
      if (this.selectedDegree) query.degree = this.selectedDegree;
      if (this.selectedSearch) query.search = this.selectedSearch;
      if (this.selectedSupervisor) query.supervisor = this.selectedSupervisor;
      const currentLocale = this.$i18n.locale === "en" ? "" : this.$i18n.locale;
      const path =
        currentLocale === "" ? "/thesis" : `/${currentLocale}/thesis`;
      this.$router.push({
        path,
        query,
      });
    },
  },
  watch: {
    selectedCollage() {
      this.selectedDepartment = "";
    },
  },
  computed: {
    departments() {
      if (this.selectedCollage) {
        const collage = this.collages.find(
          (collage) => collage.collage_id === this.selectedCollage
        );
        if (collage && collage.departments)
          return collage.departments.map((department) => ({
            id: department.id,
            name: department.department_name,
          }));

        return [];
      }
      return [];
    },
  },
  head() {
    return {
      title: "Theses",
      link: [...this.$nuxtI18nHead({ addSeoAttributes: true }).link],
      meta: [
        ...this.$nuxtI18nHead({ addSeoAttributes: true }).meta,
        {
          hid: "description",
          name: this.$t("thesis.pageName"),
          content: this.$t("thesis.pageDescription"),
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "website",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("thesis.pageName"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("thesis.pageDescription"),
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
          content: this.$t("thesis.pageName"),
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t("thesis.pageDescription"),
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
.container {
  padding: 50px;
  min-height: 550px;
}
.page-title {
  font-size: 40px;
}
.inputs-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
@media screen and (max-width: 1000px) {
  .inputs-container {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
  }
}

@media screen and (max-width: 600px) {
  .inputs-container {
    grid-template-columns: 1fr;
  }
}
.input-container {
  background-color: white;
  height: 34px;
}
.input3 {
  border-radius: 4px;
  height: 33px;
  display: flex;
  column-gap: 10px;
}
.search-input {
  width: 95%;
  height: 31px;
  border: none;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.207);
  padding-inline: 10px;
  background-color: none;
  font-size: 15px;
}
.no-results {
  text-align: center;
  margin-inline: auto;
  font-size: 40px;
  margin-bottom: 100px;
  opacity: 0.3;
}
.search-input::placeholder {
  color: black;
  font-size: 15px;
}
.search-button {
  width: 100%;
  height: 34px;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  background-color: #00adb5;
  color: white;
  cursor: pointer;
}
.search-icon {
  background-color: #00adb5;
  margin-block: auto;
  padding: 7px;
  border-radius: 5px;
  cursor: pointer;
}

.newses-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  margin-top: 40px;
  row-gap: 40px;
}
.news-container {
  display: flex;
  flex-direction: column;
  position: relative;
}
.image-container {
  width: 100%;
  height: 270px;
}
@media screen and (max-width: 650px) {
  .image-container {
    height: 230px;
  }
  .image {
    height: 230px;
  }
}
.content-title {
  font-size: 17px;
}
.image {
  width: 100%;
  height: 270px;
  object-fit: cover;
}
.degree-container {
  background-color: #00adb5;
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  font-size: 14px;
  padding: 4px 8px;
}
.content-container {
  height: 50%;
  background-color: white;
  padding: 15px;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.author-container {
  margin-top: 10px;
  display: block;
  font-size: 12px;
}
.author {
  color: #00adb5;
}
.full-article-button {
  border: none;
  background-color: #00adb5;
  font-size: 14px;
  padding: 5px 20px;
  margin-top: 20px;
  cursor: pointer;
  color: white;
  transition: 0.3s ease all;
  max-width: 40% !important;
  text-align: center;
}

.all-articles-button {
  border: none;
  background-color: #00adb5;
  font-size: 18px;
  padding: 10px 25px;
  margin-top: 30px;
  cursor: pointer;
  color: white;
  transition: 0.3s ease all;
  margin-inline: auto;
}

.full-article-button:hover,
.all-articles-button:hover {
  background-color: #5a9fa3;
}
.full-article-button:active,
.all-articles-button:active {
  background-color: #1b5659;
}

@media screen and (max-width: 1150px) {
  .news-container {
    min-height: 500px;
  }
  .content-title {
    font-size: 15px;
  }
}
@media screen and (max-width: 1000px) {
  .newses-container {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
  }
}
@media screen and (max-width: 750px) {
  .container {
    padding: 20px;
  }
  .newses-container {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 30px;
  }
  .container {
    padding-block: 50px;
    padding-inline: 20px;
  }
}
</style>
