<template>
  <section class="heading-container">
    <img src="/images/dots.svg" class="dots" alt="" />
    <article class="heading-content-container">
      <h1>
        <strong> {{ $t("home.title") }} </strong>
      </h1>
      <p>
        {{ $t("home.description") }}
      </p>
      <div class="input-container">
        <div class="search-icon-container">
          <img src="/images/search-icon.svg" height="25" width="25" alt="" />
        </div>
        <input
          type="text"
          v-model="search"
          :placeholder="$t('home.searchWithDots')"
          class="search-input"
        />
        <button
          @click="$router.push('/thesis?search=' + search)"
          class="search-button"
        >
          {{ $t("home.search") }}
        </button>
      </div>
    </article>
    <div class="heading-image-container">
      <div class="border"></div>
      <img
        src="https://carolakesteloo.nl/wp-content/uploads/afgestudeerd.jpg"
        alt="graduation"
      />
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    search: "",
  }),
};
</script>
<style scoped>
.heading-container {
  display: flex;
  gap: 150px;
  padding: 50px;
  position: relative;
}
.dots {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 300px;
  width: 300px;
  z-index: -1;
  opacity: 0.5;
}
.heading-content-container {
  width: 100%;
}

.heading-content-container h1 {
  font-size: 60px;
}

.heading-content-container p {
  margin-block: 20px;
}

.heading-image-container {
  position: relative;
  width: 100%;
  height: 350px;
  transform: translateX(-20px);
}

.heading-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 100px;
  position: relative;
  display: block;
  border: 3px solid #00adb5;
}

.border {
  position: absolute;
  top: 15px;
  left: 15px;
  bottom: -20px;
  right: -20px;
  border: 3px solid white;
  z-index: 100;
  border-top-left-radius: 100px;
}

.search-icon-container {
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-container {
  height: 50px;
  width: 100%;
  align-items: center;
  background-color: white;
  padding-inline-start: 10px;
  display: flex;
  margin-top: 40px;

  box-shadow: -1px 1px 28px -7px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: -1px 1px 28px -7px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: -1px 1px 28px -7px rgba(0, 0, 0, 0.47);
}

.search-input {
  width: calc(100% - 160px);
  height: 100%;
  border: none;
  font-size: 16px;
}

.search-input:focus {
  outline: none;
}

.search-button {
  border: none;
  width: 110px;
  height: 100%;
  background-color: #00adb5;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

@media screen and (max-width: 1000px) {
  .heading-image-container {
    display: none;
  }
  .dots {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .heading-container {
    padding: 20px;
  }
  .heading-content-container h1 {
    font-size: 40px;
  }
  .input-container {
    height: 40px;
  }
  .search-button {
    font-size: 16px;
  }
  .search-input {
    font-size: 16px;
  }
}
</style>
