<template>
  <div class="container">
    <h2 class="title">Latest Thesis Degrees</h2>
    <div class="line"></div>
    <div class="newses-container">
      <div
        v-for="thesis in latestTheses"
        :key="thesis.id"
        class="news-container"
      >
        <small class="news-date">12-3-2022</small>
        <div class="image-container">
          <img
            class="image"
            src="https://enrollment.rochester.edu/blog/wp-content/uploads/2019/05/Math-Professor-UR.jpg"
            alt=""
          />
        </div>
        <div class="content-container">
          <h3 class="content-title">
            {{ thesis.title }}
          </h3>
          <small class="author-container">
            <strong class="author">Ahmad Muhamad</strong>
            <br />
            College of
            <span class="capitalize"> {{ thesis.collage_name }}, </span>
            <br />
            <span class="capitalize">
              {{ thesis.department_name }}
            </span>
          </small>
          <nuxt-link
            :to="localePath(`/thesis/${thesis.slug}`)"
            class="full-article-button"
            >See Full Article</nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="full-width">
      <nuxt-link :to="localePath(`/thesis`)" class="all-articles-button"
        >See All Articles</nuxt-link
      >
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
  font-family: poppins-bold;
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
  min-height: 450px;
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
  padding: 8px 20px;
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
@media screen and (max-width: 680px) {
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
