<template>
  <div>
    <header>
      <nav class="navbar-container">
        <div class="logo-container">
          <img class="logo" src="/images/SUE-logo.png" alt="" />
        </div>
        <ul class="navbar-items-container">
          <li><nuxt-link class="navbar-items" to="/">Home</nuxt-link></li>
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
            <nuxt-link to="/thesis?degree=doctorate">Doctorate</nuxt-link>
          </li>
        </ul>

        <div class="settings-container">setting</div>
      </nav>
    </header>
    <Nuxt />

    <footer></footer>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
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
</style>
