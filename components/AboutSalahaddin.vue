<template>
  <div class="container">
    <div class="content-container">
      <h2>About Salahaddin University</h2>
      <p>
        Salahaddin University-Erbil is one of the public higher education
        institution in the North of Iraq and especially in Kurdistan region. It
        is located in Erbil, capital of the autonomous Kurdistan Region of Iraq.
        Sulaimani University-Sulaimani was established in 1968.
      </p>
      <!-- <button >Visit</button> -->
      <a class="full-article-button" href="https://su.edu.krd/" target="_blank"
        >SUE Main Website</a
      >
    </div>
    <div class="image-container">
      <img class="logo" src="/images/SUE-logo.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.container {
  width: 100%;
  display: flex;
  padding: 50px;
}
h2 {
  font-size: 40px;
  font-family: poppins-bold;
}
.content-container {
  width: 50%;
  display: flex;
  flex-direction: column;
}
.full-article-button {
  border: none;
  background-color: #00adb5;
  font-size: 17px;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  color: white;
  transition: 0.3s ease all;
  width: 160px;
}
p {
  margin-block: 20px;
}
.image-container {
  width: 50%;
  display: flex;
  justify-content: center;
}
.full-article-button:hover,
.all-articles-button:hover {
  background-color: #5a9fa3;
}
.full-article-button:active,
.all-articles-button:active {
  background-color: #1b5659;
}
@media screen and (max-width: 1000px) {
  .image-container {
    display: none;
  }

  .content-container {
    width: 90%;
  }
}
@media screen and (max-width: 800px) {
  .content-container {
    width: 70%;
  }

  h2 {
    font-size: 25px;
    font-family: poppins-bold;
  }
}
</style>
