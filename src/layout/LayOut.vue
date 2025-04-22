<template>
  <div class="layout-container">
    <van-nav-bar title="vite-vant4" placeholder fixed />
    <div ref="layoutMainRef" class="layout-main">
      <router-view>
        <template #default="{ Component, route }">
          <transition appear mode="out-in" name="zoom-fade">
            <component :is="Component" :key="route.fullPath" />
          </transition>
        </template>
      </router-view>
    </div>
    <van-tabbar v-model="active" fixed>
      <van-tabbar-item icon="home-o" to="/"> 首页 </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref(0)
</script>

<style lang="scss" scoped>
.layout-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
