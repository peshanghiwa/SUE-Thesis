<template>
  <div class="container">
    <div class="main-view">
      <h1>
        {{ thesis.title }}
      </h1>

      <div class="date">
        {{ thesis.student_name }} - {{ formatDate(thesis.theises_date) }}
      </div>
      <img
        :src="
          `https://backend.ethesis.su.edu.krd/${thesis.image_url}` ||
          'https://images.unsplash.com/photo-1621640786029-220e9ff8dd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
        "
        class="image-content"
        alt=""
      />
      <p class="paragraph">
        {{ thesis.description }}
      </p>
      <h2 class="contact-info">
        <strong> {{ $t("thesisDetail.contactInfo") }} </strong>
      </h2>

      <p>
        <strong> {{ $t("thesisDetail.name") }}: </strong>
        {{ thesis.student_name }}
        <br />
        <strong> {{ $t("thesisDetail.phone") }}: </strong>
        0750123123
        <br />

        <strong> {{ $t("thesisDetail.email") }}: </strong>
        ali@gmail.com
      </p>
    </div>
    <div class="side-view">
      <h2 class="similar">{{ $t("thesisDetail.similarResearches") }}</h2>
      <nuxt-link
        v-for="(relatedThesis, index) in thesis.relatedTheses"
        :to="`/thesis/${relatedThesis.slug}`"
        :key="index"
        class="news-container"
      >
        <div class="side-view-header">
          <img
            :src="
              `https://backend.ethesis.su.edu.krd/${relatedThesis.image_url}` ||
              'https://images.unsplash.com/photo-1621640786029-220e9ff8dd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
            "
            class="side-image"
            alt=""
          />
        </div>
        <div class="side-view-content">
          <h3 class="content-title">
            <strong>
              {{ trancate(relatedThesis.title) }}
            </strong>
          </h3>
          <small class="author-container">
            <strong class="author">{{ relatedThesis.students_name }}</strong>
            <br />
            {{ relatedThesis.collage_name }}
            <br />
            {{ relatedThesis.departments_name }}
          </small>
          <br />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ params, error, $axios, $t }) {
    try {
      const slug = params.detail;
      const { data } = await $axios.get(`/api/theses/${slug}`);
      return {
        thesis: data,
      };
    } catch (err) {
      console.log(err);
      error({ statusCode: 404, message: "Page Not Found" });
    }
  },
  methods: {
    trancate(str) {
      const length = 200;
      if (str.length > length) {
        return str.substring(0, length - "...".length) + "...";
      } else {
        return str;
      }
    },
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
      title: this.thesis.title,
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
  display: block;
  color: black;
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
.contact-info {
  margin-top: 40px;
}

.paragraph {
  margin-top: 20px;
  text-align: justify;
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
