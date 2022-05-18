<template>
  <div class="error-container">
    <h1 class="statuscode">404</h1>

    <div>Page Not Found</div>
  </div>
</template>
<script>
export default {
  props: ["statusCode", "message"],
};
</script>
<style scoped>
.error-container {
  height: calc(100vh - 210px) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.statuscode {
  font-size: 150px;
  color: #00adb5;
  font-family: poppins-bold;
}

.error-container > div {
  font-size: 25px;
}
</style>
