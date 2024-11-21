<script setup lang="ts">
defineProps({
  backgroundImg: {
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
})
</script>

<template>
  <div id="background-img" class="background-img" :style="{ backgroundImage: 'url(' + backgroundImg + ')' }">
    <div class="img-title1 wow animate__animated animate__fadeInRight">{{imgTitle1}}</div>
    <div class="img-title2 wow animate__animated animate__fadeInRight" data-wow-delay="0.3s">{{imgTitle2}}</div>
    <p class="img-text wow animate__animated animate__fadeInRight" data-wow-delay="0.5s">{{imgText}}</p>
  </div>
</template>

<style scoped lang="scss">
#background-img {
  overflow: hidden;
}
@include responsive('mobile'){
  #background-img {
    .background-img {
      position: relative;
      width: 100%;
      min-height: 300px;
      background-size: cover;
      background-position: center center; /* 背景图居中显示 */
      background-repeat: no-repeat; /* 防止背景图重复 */
      color: #FFFFFF;
      .img-title1 {
        position: absolute;
        top: 28%;
        left: 58%;
        font-size: 22px;
        font-weight: 700;
      }
      .img-title2 {
        position: absolute;
        top: 40%;
        left: 58%;
        font-size: 22px;
        font-weight: 700;
      }
      .img-text {
        position: absolute;
        width: 58%;
        top: 60%;
        left: 36%;
        font-size: 12px;
        line-height: 22px;
      }
    }
  }
}
@include responsive('pc') {
  #background-img {
    .background-img {
      position: relative;
      width: 100%;
      min-height: 600px;
      background-size: cover;
      background-position: center center; /* 背景图居中显示 */
      background-repeat: no-repeat; /* 防止背景图重复 */
      color: #FFFFFF;
      .img-title1 {
        position: absolute;
        top: 22%;
        left: 58%;
        font-size: 72px;
        font-weight: 700;
      }
      .img-title2 {
        position: absolute;
        top: 36%;
        left: 58%;
        font-size: 72px;
        font-weight: 700;
      }
      .img-text {
        position: absolute;
        width: 28%;
        top: 60%;
        left: 58%;
        font-size: 18px;
        line-height: 48px;
      }
    }
  }
}
</style>