<template>
  <div id="app">
    <div id="nav" class="custom-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/animations">Animations</router-link>
      <router-link to="/scroll-animations">Scroll Animations</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

a {
  border-right: 1px #2c3e50 solid;
  padding: 0 0.5rem;
  &:last-child {
    border: none;
  }
}

.custom-nav {
  width: 100%;
  justify-content: center;
  display: flex;
}
</style>
