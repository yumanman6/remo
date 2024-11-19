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
<div id="navigate" class="navigate">
    <div class="navLeft">
      <div class="navTitle">
        <img src="@/assets/images/index/icon1.png" alt="">
        <div class="">{{navTitle}}</div>
      </div>
      <p class="navText">{{navText}}</p>
    </div>
  <div class="navRight">
    <img :src="navImg" alt="">
  </div>
</div>
</template>

<style scoped lang="scss">
@include responsive('mobile'){
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
        left: 10%;
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
        left: 10%;
        font-size: 12px;
        line-height: 26px;
      }
    }
    .navRight {
      position: absolute;
      top: 14%;
      left: 0;
      height: 44%;
      img {
        //height: 100%;
        width: 92%;
      }
    }
  }
}
@include responsive('pc') {
  .navigate {
    position: relative;
    width: 100%;
    height: 300px;
    background-image: url('@/assets/images/index/navBackground3.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    color: #FFFFFF;
    .navLeft {
      .navTitle {
        position: absolute;
        top: 18%;
        right: 6%;
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
        right: 8%;
        font-size: 18px;
        line-height: 32px;
      }
    }
    .navRight {
      position: absolute;
      left: 0;
      height: 100%;
      img {
        height: 100%;
      }
    }
  }
}
</style>