<template>
  <div class="degree-graduation-numbers-container">
    <div class="numbers-container">
      <div class="degree-container">
        <h2>bachelor</h2>
        <p>238</p>
      </div>
      <div class="seperator-line"></div>
      <div class="degree-container">
        <h2>PhD</h2>
        <p>45</p>
      </div>
      <div class="seperator-line"></div>
      <div class="degree-container">
        <h2>Master</h2>
        <p>24</p>
      </div>
      <div class="seperator-line"></div>
      <div class="degree-container">
        <h2>Doctorate</h2>
        <p>27</p>
      </div>
      <div class="seperator-line"></div>
      <div class="degree-container">
        <h2>All</h2>
        <p>342</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.degree-graduation-numbers-container {
  padding: 50px;
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
.degree-container h2 {
  text-transform: uppercase;
  font-size: 30px;
}
.degree-container p {
  font-family: poppins-bold;
  font-size: 50px;
}
.seperator-line {
  width: 1px;
  height: 120px;
  background-color: rgba(255, 255, 255, 0.583);
}

@media screen and (max-width: 1150px) {
  .numbers-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 50px;
  }
  .seperator-line {
    display: none;
  }
}

@media screen and (max-width: 650px) {
  .degree-graduation-numbers-container {
    padding: 20px;
  }
  .numbers-container {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 20px;
  }
  .seperator-line {
    display: block;
    width: 100%;
    height: 1px;
  }
}
</style>
