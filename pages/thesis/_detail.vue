<template>
  <div class="container">
    <div class="main-view">
      <h1>
        {{ thesis.title }}
      </h1>
      <div class="date">{{ formatDate(thesis.created_at) }}</div>
      <img
        :src="
          thesis.image ||
          'https://images.unsplash.com/photo-1621640786029-220e9ff8dd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
        "
        class="image-content"
        alt=""
      />
      <p class="paragraph">
        {{ thesis.description }}
      </p>
      <!-- <button class="full-article-button">See Full Article</button> -->
    </div>
    <div class="side-view">
      <h2 class="similar">Similar Researches</h2>
      <div
        v-for="(relatedThesis, index) in thesis.relatedTheses"
        :key="index"
        class="news-container"
      >
        <div class="side-view-header">
          <img
            :src="
              relatedThesis.image ||
              'https://images.unsplash.com/photo-1621640786029-220e9ff8dd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
            "
            class="side-image"
            alt=""
          />
        </div>
        <div class="side-view-content">
          <h3 class="content-title">
            {{ relatedThesis.title }}
          </h3>
          <small class="author-container">
            <strong class="author">{{ relatedThesis.students_name }}</strong>
            <br />
            College of {{ relatedThesis.collages_name }},
            <br />
            {{ relatedThesis.departments_name }}
          </small>
          <br />
        </div>
      </div>
    </div>
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
    try {
      const slug = params.detail;
      const { data } = await $axios.get(`/api/theses/${slug}`);
      console.log(data);
      return {
        thesis: data,
      };
    } catch (err) {
      console.log(err);
      error({ statusCode: 404, message: "Page not found" });
    }
  },

  methods: {
    formatDate(time) {
      const date = new Date(time);
      const dateStr =
        date.getFullYear() +
        "/" +
        ("00" + date.getDate()).slice(-2) +
        "/" +
        ("00" + (date.getMonth() + 1)).slice(-2) +
        " - " +
        ("00" + date.getHours()).slice(-2) +
        ":" +
        ("00" + date.getMinutes()).slice(-2) +
        ":" +
        ("00" + date.getSeconds()).slice(-2);
      return dateStr;
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
          name: this.thesis.title,
          content: this.thesis.description,
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "website",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.thesis.title,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.thesis.description,
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
          content: this.thesis.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.thesis.description,
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
.similar {
  margin-bottom: 20px;
}
.side-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.side-view-header {
  height: 50%;
  width: 100%;
}
.author {
  color: #00adb5;
}
.author-container {
  font-size: 12px;
}
.content-title {
  font-size: 16px;
  font-family: poppins-bold;
}
.side-view-content {
  height: 50%;
  width: calc(100% - 20px);
  background-color: white;
  padding: 10px;
}
.container {
  padding: 50px;
  display: grid;
  grid-template-columns: 3fr 1.5fr;
}
@media screen and (max-width: 1000px) {
  .container {
    display: flex;
    flex-direction: column;
  }
  .side-view {
    padding: 0 !important;
    margin-top: 40px !important;
  }
}
.news-container {
  height: 400px;
  cursor: pointer;
  margin-bottom: 50px;
}

@media screen and (max-width: 1200px) {
  .news-container {
    height: 500px;
  }
}
.side-view {
  padding-inline: 30px;
  margin-top: 130px;
}

.full-article-button {
  border: none;
  background-color: #00adb5;
  font-size: 18px;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  color: white;
  transition: 0.3s ease all;
  bottom: 20px;
}
.full-article-button2 {
  border: none;
  background-color: #00adb5;
  font-size: 14px;
  padding: 7px 15px;
  margin-top: 20px;
  cursor: pointer;
  color: white;
  transition: 0.3s ease all;
  bottom: 20px;
}
.image-content {
  width: 100%;
  height: auto;
  margin-top: 10px;
}

.paragraph {
  margin-top: 20px;
}

@media screen and (max-width: 800px) {
  .container {
    padding: 20px;
  }
}

.date {
  color: #222831;
}
</style>
