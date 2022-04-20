<template>
  <div class="container">
    <h1 class="page-title">Search & Filter</h1>
    <div class="inputs-container">
      <div class="input-container">
        <v-select
          placeholder="All Colleges"
          :options="['Canada', 'United States']"
        ></v-select>
      </div>
      <div class="input-container">
        <v-select
          placeholder="All Departments"
          :options="['Canada', 'United States']"
        ></v-select>
      </div>
      <div class="input3">
        <input placeholder="Search" class="search-input" type="text" />
        <!-- <button style="margin-inline-start: 10px" class="search-button"> -->
        <img
          src="/images/search-png.png"
          class="search-icon"
          height="20"
          width="20"
          alt=""
        />
        <!-- </button> -->
      </div>
    </div>
    <div class="newses-container">
      <div v-for="(i, index) in 12" :key="index" class="news-container">
        <div class="image-container">
          <img
            class="image"
            src="https://i.blogs.es/f7aef1/lijmb2i7knggroafvumbuix3xq/840_560.jpeg"
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
  </div>
</template>
<script>
export default {};
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
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
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
