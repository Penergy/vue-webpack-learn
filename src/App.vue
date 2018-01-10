<template>
  <div id="app" class="box">
    <common-top-bar></common-top-bar>
    <header-wrapper></header-wrapper>
    <custom-article></custom-article>
    <custom-footer></custom-footer>
    <router-link to="/"><img src="./assets/logo.png"></router-link>
    <navbar></navbar>
    <nav>
      <router-link to="/user/peng/profile">Go to user profile</router-link>
      <router-link to="/user/hu/posts">Go to user posts</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url('./styles/main.css');
</style>
