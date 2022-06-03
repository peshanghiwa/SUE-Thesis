<template>
  <div class="degree-graduation-numbers-container">
    <div class="numbers-container">
      <div
        v-for="degree in degrees"
        :key="degree.degree_id"
        class="degree-container"
        :class="{
          'seperator-line-left': $store.getters.isRtl,
          'seperator-line-right': !$store.getters.isRtl,
        }"
      >
        <h2>{{ degree.degree_name }}</h2>
        <p>
          <strong>
            {{ degree.count }}
          </strong>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DegreesGraduateNumbersComponent",
  props: {
    degrees: {
      type: Array,
      required: true,
    },
  },

  // watch: {
  //   degrees: function () {
  //     if (!this.degrees.find((degree) => degree.degree_id === 4)) {
  //       this.degrees.unshift({
  //         degree_id: 4,
  //         degree_name: this.$t("home.bachelor"),
  //         count: 0,
  //       });
  //     }
  //   },
  // },

  // mounted() {
  //   // if this.degrees doesn't containt degrees_id 4, then add it
  //   if (!this.degrees.find((degree) => degree.degree_id === 4)) {
  //     this.degrees.unshift({
  //       degree_id: 4,
  //       degree_name: this.$t("home.bachelor"),
  //       count: 0,
  //     });
  //   }
  // },
};
</script>
<style scoped>
.degree-graduation-numbers-container {
  padding: 50px;
}
@media screen and (max-width: 1000px) {
  .degree-graduation-numbers-container {
    padding-top: 0;
    margin-top: 0px;
  }
}
.numbers-container {
  background-color: #00adb5;
  padding: 20px;
  color: white;
  display: flex;
  column-gap: 40px;
  justify-content: space-evenly;
}

.degree-container {
  text-align: center;
}

.seperator-line-right {
  padding-right: 6%;
  border-right: 1px solid rgba(255, 255, 255, 0.583);
}

.seperator-line-right:last-child {
  border-right: none;
  padding-right: 0px;
}

.seperator-line-left {
  padding-left: 6%;
  border-left: 1px solid rgba(255, 255, 255, 0.583);
}

@media screen and (max-width: 650px) {
  .seperator-line-left {
    border-left: none;
    padding-left: 0px;
  }
}

.seperator-line-left:last-child {
  border-left: none;
  padding-left: 0px;
}

.degree-container h2 {
  text-transform: uppercase;
  font-size: 30px;
}
.degree-container p {
  font-size: 50px;
}

@media screen and (max-width: 1150px) {
  .numbers-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 50px;
  }
}

@media screen and (max-width: 650px) {
  .degree-graduation-numbers-container {
    padding: 20px;
    margin-top: 40px;
  }
  .numbers-container {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 20px;
  }
  .degree-container {
    text-align: center;
    padding-right: 0%;
    border-right: none;
  }
  .degree-container h2 {
    text-transform: uppercase;
    font-size: 20px;
  }
  .degree-container p {
    font-size: 35px;
  }

  .seperator-line-right,
  .seperator-line-left {
    border-bottom: 1px solid rgba(255, 255, 255, 0.583);
    padding-bottom: 5%;
  }

  .seperator-line-right:last-child,
  .seperator-line-left:last-child {
    border-bottom: none;
    padding-bottom: 0%;
  }
}
</style>
