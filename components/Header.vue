<template>
  <header>
    <nav class="navbar-container">
      <div class="logo-container">
        <img
          @click="$router.push(localePath('/'))"
          class="logo"
          src="/images/SUE-logo.png"
          alt=""
        />
      </div>
      <ul class="navbar-items-container">
        <li>
          <nuxt-link
            class="navbar-items"
            :class="{
              active: navbar === 'index',
            }"
            :to="localePath('/')"
            >{{ $t("home.home") }}</nuxt-link
          >
        </li>
        <li v-for="(degree, index) in degrees" :key="index">
          <nuxt-link
            class="navbar-items"
            :class="{
              active:
                navbar === 'thesis' && $route.query.degree === degree.name,
            }"
            :to="localePath(`/thesis?degree=${degree.id}`)"
            >{{ degree[`name_${$i18n.locale}`] }}</nuxt-link
          >
        </li>
      </ul>

      <img
        @click="toggleMobileNavbar"
        src="/images/burger.svg"
        class="open-navbar-icon"
      />
      <transition
        :name="`slide-fade-${$i18n.locale === 'en' ? 'right' : 'left'}`"
      >
        <div v-if="showMobileNavbar" class="mobile-navbar-container">
          <div @click="toggleMobileNavbar" class="navbar-space"></div>
          <ul class="mobile-navbar-items-container">
            <li>
              <nuxt-link class="mobile-navbar-items" :to="localePath('/')">{{
                $t("home.home")
              }}</nuxt-link>
            </li>
            <li v-for="(degree, index) in degrees" :key="index">
              <nuxt-link
                @click="showMobileNavbar = false"
                class="mobile-navbar-items"
                :to="localePath(`/thesis?degree=${degree.id}`)"
                >{{ degree[`name_${$i18n.locale}`] }}</nuxt-link
              >
            </li>
            <div class="settings-container-mobile">
              <select
                v-model="selectedLanguage"
                @change="switchLanguage"
                class="select-input"
                name=""
                id=""
              >
                <option value="en">En</option>
                <option value="ku">Ku</option>
                <option value="ar">Ar</option>
              </select>
            </div>
          </ul>
        </div>
      </transition>

      <div class="settings-container">
        <select
          v-model="selectedLanguage"
          @change="switchLanguage"
          class="select-input"
          name=""
          id=""
        >
          <option value="en">En</option>
          <option value="ku">Ku</option>
          <option value="ar">Ar</option>
        </select>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "header-component",

  data() {
    return {
      showMobileNavbar: false,
      selectedLanguage: "en",
    };
  },
  mounted() {
    this.selectedLanguage = this.$i18n.locale;
    this.setFontFamily(this.isRtl);
  },
  methods: {
    toggleMobileNavbar() {
      this.showMobileNavbar = !this.showMobileNavbar;
    },
    async switchLanguage(e) {
      if (this.selectedLanguage === "en") {
        this.$store.commit("CHNAGE_LANG", false);
        this.setFontFamily(false);
      } else {
        this.$store.commit("CHNAGE_LANG", true);
        this.setFontFamily(true);
      }
      this.$i18n.setLocale(this.selectedLanguage);
      await this.$store.dispatch("getDegrees");
    },

    setFontFamily(isRtl) {
      const rootCssVariables = document.querySelector(":root");
      if (!isRtl) {
        rootCssVariables.style.setProperty(
          "--default-font-family",
          "poppins-regular"
        );
      } else {
        rootCssVariables.style.setProperty("--default-font-family", "ir-sans");
      }
    },
  },
  computed: {
    navbar() {
      return this.$route.name;
    },
    degrees() {
      return this.$store.getters.getDegrees;
    },
    isRtl() {
      return this.$store.getters.isRtl;
    },
  },
};
</script>
<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions. */
.slide-fade-right-enter-active,
.slide-fade-right-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-right-enter,
.slide-fade-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-fade-left-enter-active,
.slide-fade-left-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-left-enter,
.slide-fade-left-leave-to {
  transform: translateX(-100%);
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

.settings-container-mobile .select-input {
  width: 90%;
  margin-inline: 20px;
  margin-top: 40px;
  height: 30px;
}

.navbar-items {
  color: #393e46;
  text-transform: capitalize;
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

.select-input {
  background-color: #00adb5;
  color: white;
  padding: 5px;
  border-radius: 5px;
  border: none;
}
</style>
