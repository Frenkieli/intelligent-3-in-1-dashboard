<template>
  <div id="app">
    <div id="nav">
      <router-link tag='div' to="/">Home</router-link>
      <router-link tag='div' to="/electric">electric</router-link>
      <router-link tag='div' to="/gas">gas</router-link>
      <router-link tag='div' to="/water">water</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'scss/main.scss';

</style>
