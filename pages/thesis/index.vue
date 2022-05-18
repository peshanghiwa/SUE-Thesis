<template>
  <div class="container">
    <h1 class="page-title">Search & Filter</h1>
    <div class="inputs-container">
      <div class="input-container">
        <v-select
          placeholder="All Colleges"
          :options="collages"
          label="name"
          :reduce="(collage) => collage.collage_id"
          v-model="selectedCollage"
        ></v-select>
      </div>
      <div class="input-container">
        <v-select
          placeholder="All Departments"
          :disabled="departments.length === 0"
          :options="departments"
          label="name"
          :reduce="(department) => department.id"
          v-model="selectedDepartment"
        ></v-select>
      </div>
      <div class="input-container">
        <v-select
          placeholder="All Degrees"
          :options="degrees"
          label="name"
          :reduce="(degree) => degree.id"
          v-model="selectedDegree"
        ></v-select>
      </div>
      <div class="input3">
        <input
          placeholder="Search"
          v-model="selectedSearch"
          class="search-input"
          type="text"
        />
        <img
          src="/images/search-png.png"
          class="search-icon"
          height="20"
          width="20"
          alt=""
        />
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
              thesis.image ||
              'https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png'
            "
            alt=""
          />
        </div>
        <div class="content-container">
          <h3 class="content-title">
            {{ thesis.title }}
          </h3>
          <small class="author-container">
            <strong class="author">{{ thesis.student_name }}</strong>
            <br />
            College of {{ thesis.collage_name }},
            <br />
            {{ thesis.department_name }}
          </small>
          <nuxt-link :to="`/thesis/${thesis.slug}`" class="full-article-button"
            >See Full Article</nuxt-link
          >
        </div>
      </div>
    </div>
    <client-only>
      <paginate
        v-model="pagination.currentPage"
        :page-count="pagination.totalPages"
        :page-range="2"
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
  watchQuery: ["page", "search", "collage", "department", "degree"],
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
    try {
      const { page = 1, degree, search, department, collage } = query;
      let url = `/api/theses/grid?page=${page - 1}&pageSize=20`;
      if (degree) url += `&degree=${degree}`;
      if (search) url += `&search=${search}`;
      if (department) url += `&department=${department}`;
      if (collage) url += `&collage=${collage}`;

      const { data } = await $axios.get(url);

      const response = await $axios.get("/api/home/thesesPage");
      const degrees = response.data.degrees.map((degree) => ({
        id: degree.id,
        name: degree.name,
      }));
      const collages = response.data.collages;

      return {
        theses: data.data,
        degrees,
        collages,
        pagination: {
          currentPage: Number(page),
          totalPages: data.pages,
          pageSize: 20,
          totalTheses: data.records,
        },
        selectedDegree: degree,
        selectedCollage: collage,
        selectedDepartment: department,
        selectedSearch: search,
      };
    } catch (err) {
      console.log(err);
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  methods: {
    async clickCallback(pageNumber) {
      this.$router.push({
        path: "/thesis",
        query: { page: Number(pageNumber) },
      });
    },
  },
  computed: {
    departments() {
      if (this.selectedCollage) {
        console.log(this.selectedCollage);
        const collage = this.collages.find(
          (collage) => collage.collage_id === this.selectedCollage
        );

        console.log(collage);
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
          name: "Salahaddin University Theses Website",
          content:
            "Salahaddin University Theses page, Filter by degree, department, collage, search, and more",
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
            "Salahaddin University Theses page, Filter by degree, department, collage, search, and more",
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
            "Salahaddin University Theses page, Filter by degree, department, collage, search, and more",
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
}
.page-title {
  font-size: 40px;
  font-family: poppins-bold;
}
.inputs-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
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
}
.input3 {
  border-radius: 4px;
  display: flex;
  column-gap: 10px;
}
.search-input {
  width: calc(100% - 70px);
  height: 97%;
  border: none;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.207);
  padding-inline: 10px;
  background-color: none;
  font-size: 15px;
}

.search-input::placeholder {
  color: black;
  font-size: 15px;
}
.search-button {
  width: 40px;
  margin-inline-start: 10px !important;
  height: 95%;
  border: none;
  border-radius: 4px;
  background-color: #00adb5;
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
  min-height: 450px;
  display: flex;
  flex-direction: column;
  position: relative;
}
.image-container {
  width: 100%;
  height: 50%;
}
.content-title {
  font-size: 17px;
}
.image {
  width: 100%;
  height: 100%;
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
  width: calc(100% - 30px);
  height: calc(50% - 30px);
  background-color: white;
  padding: 15px;
  position: relative;
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
  padding: 6px 16px;
  margin-top: 20px;
  cursor: pointer;
  color: white;
  transition: 0.3s ease all;
  bottom: 20px;
  left: 15px;
  position: absolute;
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
