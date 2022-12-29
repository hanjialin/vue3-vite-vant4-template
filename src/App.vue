<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">标签A</van-tabbar-item>
    <van-tabbar-item icon="search">标签B</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签C</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签D</van-tabbar-item>
  </van-tabbar>
</template>
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
const active = ref(0)
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
