<template>
  <div class="container">
    <h2 class="title">Latest Thesis Degrees</h2>
    <div class="line"></div>
    <div class="newses-container">
      <div v-for="(i, index) in 3" :key="index" class="news-container">
        <div class="image-container">
          <img
            class="image"
            src="https://enrollment.rochester.edu/blog/wp-content/uploads/2019/05/Math-Professor-UR.jpg"
            alt=""
          />
        </div>
        <div class="content-container">
          <h3 class="content-title">
            Human Resources and issues behind the source of lorem ipsum dolor
            sit enus pat sictumus, pens
          </h3>
          <small class="author-container">
            <strong class="author">Ahmad Muhamad</strong>
            <br />
            College of Engineering,
            <br />
            Software and Informatics Engineering
          </small>
          <button class="full-article-button">See Full Article</button>
        </div>
      </div>
    </div>
    <div class="full-width">
      <button class="all-articles-button">See All Articles</button>
    </div>
  </div>
</template>
<script>
export default {};
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
