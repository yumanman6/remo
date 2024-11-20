<template>
  <div>
    <div id="app">
<!--      <NuxtLayout name="nav"/>-->
      <NuxtLayout name="navbar"/>
      <NuxtPage />
      <NuxtLayout name="foot"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // 确保 WOW.js 在客户端初始化
  if (typeof window !== 'undefined' && window.WOW) {
    const wow = new window.WOW();
    wow.init(); // 初始化 WOW.js
  }
});
</script>