<template>
  <div class="collages-container">
    <h2 class="title">
      <strong> {{ $t("home.collagesTitle") }} </strong>
    </h2>
    <div class="line"></div>
    <div class="colleges-container">
      <nuxt-link
        :to="localePath('/thesis?collage=' + college.id)"
        v-for="(college, index) in colleges"
        :key="index"
        class="collage-container"
      >
        <img :src="college.logo" alt="" class="logo" />
        <h3 class="college-title">{{ college.title }}</h3>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colleges: [
        {
          title: this.$t("home.collages.science"),
          logo: "images/science.svg",
          id: 7,
        },
        {
          title: this.$t("home.collages.engineering"),
          logo: "images/engineering.svg",
          id: 1,
        },
        {
          title: this.$t("home.collages.law"),
          logo: "images/law.svg",
          id: 10,
        },
        {
          title: this.$t("home.collages.agriculture"),
          logo: "images/agriculture.svg",
          id: 3,
        },
        {
          title: this.$t("home.collages.education"),
          logo: "images/education.svg",
          id: 2,
        },
        {
          title: this.$t("home.collages.arts"),
          logo: "images/art.svg",
          id: 15,
        },
        {
          title: this.$t("home.collages.languages"),
          logo: "images/languages.svg",
          id: 5,
        },
        {
          title: this.$t("home.collages.administrationAndEconomics"),
          logo: "images/economy.svg",
          id: 9,
        },
        {
          title: this.$t("home.collages.basicEducation"),
          logo: "images/education.svg",
          id: 11,
        },
        {
          title: this.$t("home.collages.physicalEducation"),
          logo: "images/sport.svg",
          id: 4,
        },
        {
          title: this.$t("home.collages.islamicScience"),
          logo: "images/sport.svg",
          id: 12,
        },
        {
          title: this.$t("home.collages.fineArts"),
          logo: "images/art.svg",
          id: 8,
        },
        {
          title: this.$t("home.collages.educationShaqlawa"),
          logo: "images/education.svg",
          id: 16,
        },
        {
          title: this.$t("home.collages.educationMakhmur"),
          logo: "images/education.svg",
          id: 17,
        },
        {
          title: this.$t("home.collages.politicalScience"),
          logo: "images/politic.svg",
          id: 13,
        },
      ],
    };
  },
};
</script>
<style scoped>
.collages-container {
  padding: 50px;
}
.title {
  font-size: 40px;
  text-align: center;
}
@media screen and (max-width: 650px) {
  .title {
    font-size: 30px;
  }
}
.line {
  width: 30%;
  height: 6px;
  background-color: #00adb5;
  margin-inline: auto;
  margin-block: 10px;
}
.colleges-container {
  width: 100%;
  display: grid;
  margin-top: 40px;
  grid-template-columns: repeat(5, 1fr);
}
.collage-container {
  width: 100%;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.061);
  padding-block: 40px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.college-title {
  font-size: 18px;
  margin-top: 10px;
  padding-inline: 10px;
  color: black;
}

@media screen and (max-width: 1150px) {
  .colleges-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 800px) {
  .colleges-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 800px) {
  .colleges-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 650px) {
  .title {
    font-size: 25px;
  }

  .colleges-container {
    grid-template-columns: repeat(1, 1fr);
  }
  .collages-container {
    padding: 30px;
    margin-top: 50px;
  }
}

.logo {
  transition: all 0.3s ease;
  height: 70px;
}

.collage-container:hover {
  box-shadow: 1px -1px 64px -16px rgba(0, 0, 0, 0.402);
  -webkit-box-shadow: 1px -1px 64px -16px rgba(0, 0, 0, 0.402);
  -moz-box-shadow: 1px -1px 64px -16px rgba(0, 0, 0, 0.402);
}

.collage-container:nth-child(calc(2 + 1)) {
  background-color: red;
}
</style>
