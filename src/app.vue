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
import { ref, onMounted } from 'vue';
import axios from 'axios';

onMounted(() => {
  // 确保 WOW.js 在客户端初始化
  if (typeof window !== 'undefined' && window.WOW) {
    const wow = new window.WOW();
    wow.init(); // 初始化 WOW.js
  }
});

// import { useRuntimeConfig } from '#app';
//
// const config = useRuntimeConfig();
// axios.get(`${config.public.axiosBaseURL}config.json`)
//     .then(response => {
//       console.log('配置文件内容:', response.data);
//     })
//     .catch(error => {
//       console.error('读取配置文件失败:', error);
//     });
</script>