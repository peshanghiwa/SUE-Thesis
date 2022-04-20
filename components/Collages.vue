<template>
  <div class="collages-container">
    <h2 class="title">Salahaddin University Colleges</h2>
    <div class="line"></div>
    <div class="colleges-container">
      <div
        v-for="(college, index) in colleges"
        :key="index"
        class="collage-container"
      >
        <img :src="college.logo" alt="" class="logo" />
        <h3 class="college-title">{{ college.title }}</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    colleges: [
      {
        title: "College of Science",
        logo: "images/science.svg",
      },
      {
        title: "College of Engineering",
        logo: "images/engineering.svg",
      },
      {
        title: "College of Law",
        logo: "images/law.svg",
      },
      {
        title: "College of Agriculture",
        logo: "images/agriculture.svg",
      },
      {
        title: "College of Education",
        logo: "images/education.svg",
      },
      {
        title: "College of Arts",
        logo: "images/art.svg",
      },
      {
        title: "College of Languages",
        logo: "images/languages.svg",
      },
      {
        title: "College of Administration & Economics",
        logo: "images/economy.svg",
      },
      {
        title: "College of Basic Education",
        logo: "images/education.svg",
      },
      {
        title: "College of Physical Education",
        logo: "images/sport.svg",
      },
      {
        title: "College of Islamic Science",
        logo: "images/sport.svg",
      },
      {
        title: "College of Fine Arts",
        logo: "images/art.svg",
      },
      {
        title: "College of Education Shaqlawa",
        logo: "images/education.svg",
      },
      {
        title: "College of Education Makhmur",
        logo: "images/education.svg",
      },
      {
        title: "College of Political Science",
        logo: "images/politic.svg",
      },
    ],
  }),
};
</script>
<style scoped>
.collages-container {
  padding: 50px;
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
  font-family: poppins-regular;
  font-size: 18px;
  margin-top: 10px;
  padding-inline: 10px;
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
    font-size: 30px;
  }
  .colleges-container {
    grid-template-columns: repeat(1, 1fr);
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
