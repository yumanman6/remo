<script setup lang="ts">
defineProps({
  navTitle: {
    type: String,
    required: true,
  },
  navText: {
    type: String,
    required: true,
  },
  navImg: {
    type: String,
    required: true,
  }
})
</script>

<template>
<div id="navigateLeft">
  <div class="navigate wow animate__animated animate__fadeInRight" data-wow-delay="0.1s">
    <div class="navLeft">
      <div class="navTitle">
        <img src="@/assets/images/index/icon1.png" alt="">
        <div class="">{{navTitle}}</div>
      </div>
      <p class="navText">{{navText}}</p>
    </div>
    <div class="navRight d-flex justify-content-end">
      <img :src="navImg" alt="">
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
#navigateLeft {
  overflow: hidden;
}
@include responsive('mobile'){
  #navigateLeft {
    .navigate {
      position: relative;
      width: 100%;
      height: 440px;
      background-image: url('assets/images/index/navBackground2.jpg');
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      color: #FFFFFF;
      .navLeft {
        .navTitle {
          position: absolute;
          top: 62%;
          right: 6%;
          font-size: 30px;
          font-weight: 700;
          display: flex; /* 使子元素在一行内显示 */
          align-items: center; /* 垂直居中对齐 */
          img {
            width: 10%;
            margin-right: 4%;
          }
        }
        .navText {
          position: absolute;
          width: 80%;
          top: 74%;
          right: 0;
          font-size: 12px;
          line-height: 26px;
        }
      }
      .navRight {
        position: absolute;
        top: 14%;
        right: 0;
        height: 44%;
        img {
          //height: 100%;
          width: 92%;
        }
      }
    }
  }
}
@include responsive('pc') {
  #navigateLeft {
    .navigate {
      position: relative;
      width: 100%;
      height: 300px;
      background-image: url('@/assets/images/index/navBackground1.png');
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      color: #FFFFFF;
      .navLeft {
        .navTitle {
          position: absolute;
          top: 18%;
          left: 8%;
          font-size: 72px;
          font-weight: 700;
          display: flex; /* 使子元素在一行内显示 */
          align-items: center; /* 垂直居中对齐 */
          img {
            width: 10%;
            margin-right: 4%;
          }
        }
        .navText {
          position: absolute;
          width: 38%;
          top: 56%;
          left: 10%;
          font-size: 18px;
          line-height: 32px;
        }
      }
      .navRight {
        position: absolute;
        right: 0;
        height: 100%;
        img {
          height: 100%;
        }
      }
    }
  }
}
</style>