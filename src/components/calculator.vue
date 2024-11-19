<script setup lang="ts">

</script>

<template>
<div id="calculator">
  <div class="c-bg">
    <div class="c-body">
      <div class="c-title d-flex justify-content-center align-items-center">私人貸款計算機</div>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
@include responsive('mobile'){

}
@include responsive('pc') {
  #calculator {
    .c-bg {
      position: relative;
      background-image: url("@/assets/images/calculator/calculatorBg.png");
      min-height: 670px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
    }
    .c-body {
      position: absolute;
      right: 10%;
      top: 10%;
      width: 36%;
      height: 80%;
      background-color: rgba(255, 255, 255, 0.6);
      border: 20px solid transparent;
      border-image-source: url('@/assets/images/calculator/border.png');
      border-image-slice: 30;
      border-image-repeat: stretch;
      .c-title {
        height: 14%;
        background-color: $title-color;
        width: calc(100% + 36px); // 加上两边的 border 宽度
        margin-left: -18px; // 往左偏移补偿 border
        margin-top: -16px;
        color: #FFFFFF;
      }
    }
  }

}
</style>