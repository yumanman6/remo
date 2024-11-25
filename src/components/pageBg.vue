<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';

// 定义 props
defineProps({
  backgroundImgPc: {
    type: String,
    required: true,
  },
  backgroundImgMo: {
    type: String,
    required: true,
  },
  imgTitle1: {
    type: String,
    required: true,
  },
  imgTitle2: {
    type: String,
    required: false,
  },
  imgText: {
    type: String,
    required: true,
  },
});
// 响应式变量和计算属性
const isMobile = ref(false);

// 在浏览器环境检测窗口宽度
function updateIsMobile() {
  isMobile.value = window.innerWidth <= 768;
}

// 监听 props 初始化
onMounted(() => {
  updateIsMobile();
  console.log('isMobile',isMobile)
});
</script>

<template>
  <div v-if="!isMobile" id="page-background" class="background-img" :style="{ backgroundImage: 'url(' + backgroundImgPc + ')' }">
    <div class="img-title d-flex align-items-center justify-content-start">
      <img class="img-img" src="@/assets/images/pageBg/icon.png" alt="">
      <div class="">
        <div class="img-title1 wow animate__animated animate__fadeInRight">{{ imgTitle1 }}</div>
        <div class="img-title2 wow animate__animated animate__fadeInRight" data-wow-delay="0.3s">{{ imgTitle2 }}</div>
      </div>
    </div>
    <p class="img-text wow animate__animated animate__fadeInRight" data-wow-delay="0.5s">{{ imgText }}</p>
  </div>
  <div v-else id="page-background" class="background-img" :style="{ backgroundImage: 'url(' + backgroundImgMo + ')' }">
    <div class="img-title d-flex align-items-center justify-content-start">
      <img class="img-img" src="@/assets/images/pageBg/icon.png" alt="">
      <div class="">
        <div class="img-title1 wow animate__animated animate__fadeInRight">{{ imgTitle1 }}</div>
        <div class="img-title2 wow animate__animated animate__fadeInRight" data-wow-delay="0.3s">{{ imgTitle2 }}</div>
      </div>
    </div>
    <p class="img-text wow animate__animated animate__fadeInRight" data-wow-delay="0.5s">{{ imgText }}</p>
  </div>
</template>

<style scoped lang="scss">
#page-background {
  overflow: hidden;
}
@include responsive('mobile'){
  .background-img {
    position: relative;
    width: 100%;
    min-height: 580px;
    background-size: 100% auto;
    background-position: top center;
    background-repeat: no-repeat;
    background-color: $title-color;
    color: #FFFFFF;
    .img-title {
      position: absolute;
      font-size: 32px;
      width: 90%;
      top: 44%;
      left: 5%;
      .img-img {
        width: 30%;
      }
    }
    .img-text {
      position: absolute;
      width: 78%;
      top: 72%;
      left: 11%;
      font-size: 16px;
      line-height: 22px;
    }
  }
}
@include responsive('pc') {
  .background-img {
    position: relative;
    width: 100%;
    min-height: 600px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    color: #FFFFFF;
    .img-title {
      position: absolute;
      font-size: 38px;
      width: 30%;
      top: 40%;
      left: 56%;
      .img-img {
        width: 30%;
      }
    }
    .img-text {
      position: absolute;
      width: 38%;
      top: 70%;
      left: 58%;
      font-size: 18px;
      line-height: 30px;
    }
  }
}
</style>