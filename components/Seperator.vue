<template>
  <div class="seperator-container">
    <div class="line"></div>
    <img src="/images/dots.svg" class="dots-image" alt="" />
    <div class="line"></div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.seperator-container {
  display: flex;
  padding: 50px;
  width: calc(100% - 100px);
  justify-content: space-between;
  /* background-color: red; */
  align-items: center;
}

.line {
  width: 40%;
  height: 2px;
  background-color: #7070703d;
}

.dots-image {
  width: 150px;
  height: 150px;
}

@media screen and (max-width: 1000px) {
  .line {
    width: 35%;
  }

  .dots-image {
    width: 100px;
    height: 100px;
  }
}
@media screen and (max-width: 680px) {
  .line {
    width: 30%;
  }
}
</style>
