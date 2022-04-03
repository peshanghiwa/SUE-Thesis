<template>
  <header>
    <nav class="navbar-container">
      <div class="logo-container">
        <img class="logo" src="/images/SUE-logo.png" alt="" />
      </div>
      <ul class="navbar-items-container">
        <li><nuxt-link class="navbar-items active" to="/">Home</nuxt-link></li>
        <li>
          <nuxt-link class="navbar-items" to="/thesis?degree=bachelor"
            >Bachelor</nuxt-link
          >
        </li>
        <li>
          <nuxt-link class="navbar-items" to="/thesis?degree=master"
            >Master</nuxt-link
          >
        </li>
        <li>
          <nuxt-link class="navbar-items" to="/thesis?degree=phd"
            >PhD</nuxt-link
          >
        </li>
        <li>
          <nuxt-link class="navbar-items" to="/thesis?degree=doctorate"
            >Doctorate</nuxt-link
          >
        </li>
      </ul>

      <img
        @click="toggleMobileNavbar"
        src="/images/burger.svg"
        class="open-navbar-icon"
      />
      <transition name="slide-fade">
        <div v-if="showMobileNavbar" class="mobile-navbar-container">
          <div @click="toggleMobileNavbar" class="navbar-space"></div>
          <ul class="mobile-navbar-items-container">
            <li>
              <nuxt-link class="mobile-navbar-items" to="/">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link
                class="mobile-navbar-items"
                to="/thesis?degree=bachelor"
                >Bachelor</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="mobile-navbar-items" to="/thesis?degree=master"
                >Master</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="mobile-navbar-items" to="/thesis?degree=phd"
                >PhD</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                class="mobile-navbar-items"
                to="/thesis?degree=doctorate"
                >Doctorate</nuxt-link
              >
            </li>
          </ul>
        </div>
      </transition>

      <div class="settings-container">setting</div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "header-component",
  data() {
    return {
      showMobileNavbar: false,
    };
  },
  methods: {
    toggleMobileNavbar() {
      this.showMobileNavbar = !this.showMobileNavbar;
    },
  },
};
</script>
<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 60px;
}

.logo {
  height: 80px;
  width: 80px;
}
.navbar-items-container {
  display: flex;
  list-style-type: none;
  gap: 20px;
}

.navbar-items {
  color: #393e46;
}

.navbar-items.active {
  border-bottom: 3px solid #00adb5;
}

.open-navbar-icon {
  cursor: pointer;
  display: none;
}

.mobile-navbar-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  z-index: 1000;
}

.mobile-navbar-items-container {
  width: 65%;
  height: 100%;
  background-color: #393e46;
  list-style-type: none;
}
/* select the first element of .mobile-navbar-items */
.mobile-navbar-items-container li:first-child {
  margin-top: 20px;
}
.mobile-navbar-items {
  margin-inline: 20px;
  color: white;
  font-size: 25px;
}

.navbar-space {
  width: 35%;
  height: 100%;
}

@media screen and (max-width: 768px) {
  .navbar-container {
    padding: 10px 20px;
  }
  .settings-container {
    display: none;
  }
  .logo {
    height: 60px;
    width: 60px;
  }
  .navbar-items-container {
    display: none;
  }
  .open-navbar-icon {
    display: block;
  }
  .mobile-navbar-container {
    display: flex;
  }
}
</style>