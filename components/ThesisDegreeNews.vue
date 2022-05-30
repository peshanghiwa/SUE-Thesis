<template>
  <div class="container">
    <h2 class="title">
      <strong> {{ $t("home.thesisDegreeNewsTitle2") }} </strong>
    </h2>
    <div class="line"></div>
    <div class="newses-container">
      <div
        v-for="thesis in latestTheses"
        :key="thesis.id"
        class="news-container"
      >
        <small class="news-date">{{ formatDate(thesis.created_at) }}</small>
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
              {{ $t("home.collageOf") }}
              <span class="capitalize"> {{ thesis.collage_name }}, </span>
              <br />
              <span class="capitalize">
                {{ thesis.department_name }}
              </span>
            </small>
          </div>
          <nuxt-link
            :to="localePath(`/thesis/${thesis.slug}`)"
            class="full-article-button"
            >See Full Article</nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="full-width">
      <nuxt-link :to="localePath(`/thesis`)" class="all-articles-button">
        {{ $t("home.fullArticle") }}
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ThesisDegreeNewsComponent",
  props: {
    latestTheses: {
      type: Array,
      required: true,
    },
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
};
</script>
<style scoped>
.container {
  padding: 50px;
}
.full-width {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 40px;
  text-align: center;
}
.line {
  width: 30%;
  height: 6px;
  background-color: #00adb5;
  margin-inline: auto;
  margin-block: 10px;
}
.newses-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  margin-top: 40px;
}
.news-container {
  display: flex;
  flex-direction: column;
  position: relative;
}
.news-date {
  position: absolute;
  background-color: #00adb5;
  top: 10px;
  padding: 4px 8px;
  color: white;
  font-size: 12px;
  left: 10px;
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
  padding: 8px 20px;
  cursor: pointer;
  color: white;
  transition: 0.3s ease all;
  max-width: 40% !important;
  text-align: center;
  margin-top: 20px;
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
@media screen and (max-width: 680px) {
  .newses-container {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 30px;
  }
  .title {
    font-size: 30px;
  }
  .container {
    padding-block: 50px;
    padding-inline: 20px;
  }
}
</style>
