<template>
  <van-config-provider theme="light" :theme-vars="themeVars" theme-vars-scope="global">
    <router-view />
  </van-config-provider>
</template>
<script setup lang="ts">
import { ConfigProviderThemeVars } from 'vant'

const themeVars: ConfigProviderThemeVars = {}
</script>
<style scoped></style>
