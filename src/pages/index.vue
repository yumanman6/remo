<script setup>
import backgroundImg from '@/assets/images/index/background.png'
import navImg1 from '@/assets/images/index/nav1.png'
import navImg2 from '@/assets/images/index/nav2.png'
import navImg3 from '@/assets/images/index/nav3.png'
import navImg4 from '@/assets/images/index/nav4.png'

//section1
import { onMounted,ref } from 'vue';
import { loadImgs } from '~/composables/loadImgs';
const section1infoUrls = import.meta.glob('@/assets/images/index/section1-icon*.png',{
  query: '?url', import: 'default'
});
const section1Array = ref([]);

const section1Items = ref([])

onMounted(async() => {
  await loadImgs(section1infoUrls,section1Array);
  section1Items.value =[
    {
      title: '息借貸的財',
      text: '嶄新的實體 + 網上特快貸款平台，借貸最快 5 分',
      src: section1Array.value[0],
    },
    {
      title: '息借貸的財',
      text: '嶄新的實體 + 網上特快貸款平台，借貸最快 5 分',
      src: section1Array.value[1],
    },
    {
      title: '息借貸的財',
      text: '嶄新的實體 + 網上特快貸款平台，借貸最快 5 分',
      src: section1Array.value[2],
    },
    {
      title: '息借貸的財',
      text: '嶄新的實體 + 網上特快貸款平台，借貸最快 5 分',
      src: section1Array.value[3],
    }
  ]
})
</script>

<template>
<div id="index">
  <div class="index-img">
    <div class="index-img-text">
      <span>24/7網上</span><br>自助貸款
      <img class="mouse" src="@/assets/images/index/img2.png" alt="">
    </div>
  </div>
  <background :backgroundImg="backgroundImg"
              imgTitle1="網上自助貸款"
              imgTitle2="極速Easy"
              imgText="Remo Credit 係一間專營網上貸款的財務公司，致力研發快捷又方便的貸款服務，貸款申請步驟簡單，只要在網上就能成功完成貸款所有程序，最快5分鐘完成批核。">
  </background>
  <navigate-left :navImg="navImg1"
                 navTitle="網上自助貸款"
                 navText="嶄新的實體 + 網上特快貸款平台，借貸最快 5 分鐘批核，24 小時現金貸款到手，全港智能櫃員機即攞現金。">
  </navigate-left>
  <navigate-right :navImg="navImg2"
                  navTitle="網上自助貸款"
                  navText="嶄新的實體 + 網上特快貸款平台，借貸最快 5 分鐘批核，24 小時現金貸款到手，全港智能櫃員機即攞現金。">
  </navigate-right>
  <navigate-left :navImg="navImg3"
                 navTitle="網上自助貸款"
                 navText="嶄新的實體 + 網上特快貸款平台，借貸最快 5 分鐘批核，24 小時現金貸款到手，全港智能櫃員機即攞現金。">
  </navigate-left>
  <navigate-right :navImg="navImg4"
                  navTitle="網上自助貸款"
                  navText="嶄新的實體 + 網上特快貸款平台，借貸最快 5 分鐘批核，24 小時現金貸款到手，全港智能櫃員機即攞現金。">
  </navigate-right>
  <div class="section-1">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="section-1-title">網上自助貸款</div>
        <p>嶄新的實體 + 網上特快貸款平台，借貸最快 5 分鐘批核，24 小時現金貸款到手，全港智能櫃員機即攞現金。嶄新的實體款平台，借貸最快 5 分鐘批核，24 小時現金貸款到手，全港智能櫃員機即攞現金。</p>
        <div class="col-md-3 col-6 section-1-text" v-for="(info,index) in section1Items" :key="index">
          <div class="section-1-img d-flex justify-content-center align-items-center">
            <div>
              <img :src="info.src" alt="">
              <div class="section-1-text-title">{{info.title}}</div>
            </div>
          </div>
          <p>{{info.text}}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="section-2">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img class="section-2-img" src="@/assets/images/index/section2-img1.png" alt="">
        </div>
        <div class="col-md-6 section-2-title d-flex">
          <div>
            <img src="@/assets/images/index/icon1.png" alt="">
          </div>
          <div>
            <div class="section-2-title1">消費結餘轉Remo Cash</div>
            <div class="section-2-title2">即送現金Cash Out</div>
            <p>(現金回贈是計算批出貸款的2％，即＄50,000貸款可回贈現金$1,000)</p>
          </div>
        </div>
        <div class="col-md-4 section-2-icon">
          <div class="section-2-icon-title">重置TU轉戶</div>
          <div class="row justify-content-center align-items-center">
            <div class="col-md-1 col-2"></div>
            <div class="col-3">
              <img src="@/assets/images/index/section2-icon1.png" alt="">
            </div>
            <div class="col-7 section-2-icon-text">8折轉戶</div>
          </div>
        </div>
        <div class="col-md-4 section-2-icon">
          <div class="section-2-icon-title">信用卡轉戶</div>
          <div class="row justify-content-center align-items-center">
            <div class="col-md-1 col-2"></div>
            <div class="col-3">
              <img src="@/assets/images/index/section2-icon1.png" alt="">
            </div>
            <div class="col-7 section-2-icon-text">7折轉戶</div>
          </div>
        </div>
        <div class="col-md-4 section-2-icon">
          <div class="section-2-icon-title">循環貸款轉戶</div>
          <div class="row justify-content-center align-items-center">
            <div class="col-md-1 col-2"></div>
            <div class="col-3">
              <img src="@/assets/images/index/section2-icon1.png" alt="">
            </div>
            <div class="col-7 section-2-icon-text">6折轉戶</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <calculator></calculator>
</div>
</template>

<style scoped lang="scss">
@include responsive('mobile') {
  .index-img {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-image: url("@/assets/images/index/img1.png");
    min-height: 400px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .index-img-text {
      position: relative;
      font-size: 28px;
      color: white;
      line-height: 28px;

      span {
        font-size: 22px;
      }

      .mouse {
        position: absolute;
        bottom: -36px;
        right: -4px;
        width: 40px;
        z-index: 1;
      }
    }
  }
  .section-1 {
    background-color: #FFFFFF;
    min-height: 600px;
    padding: 40px 0;
    p {
      color: #000000;
      padding-top: 20px;
      max-width: 80%;
      margin: 0 auto;
      font-size: 13px;
    }
    .section-1-title {
      color: $title-color;
      font-size: 30px;
      font-weight: 700;
    }
    .section-1-text {
      padding: 40px 10px 0;
      height: 300px;
      .section-1-img {
        height: 70%;
        border: 2px solid $title-color;
        border-radius: 15px;
        padding-top: 16px;
        img {
          max-width: 60%;
          min-height: 80px;
        }
        .section-1-text-title {
          padding-top: 8px;
          font-size: 18px;
        }
      }
    }
  }
  .section-2 {
    position: relative;
    background: radial-gradient(circle, rgb(55, 58, 56) 0%, rgb(28, 30, 36) 100%);
    margin: 60px 10px 10px;
    min-height: 600px;
    padding: 0 0 60px;
    .section-2-img {
      position: absolute;
      top: -50px; /* 调整图片向上穿插 */
      left: 1%;
      width: 100%;
    }
    .section-2-title {
      padding-top: 70%;
      img {
        width: 50%;
        margin-top: 30%;
        margin-left: 32%;
      }
      .section-2-title1 {
        color: $title-color;
        font-size: 24px;
      }
      .section-2-title2 {
        color: #FFFFFF;
        font-size: 24px;
      }
      p {
        font-size: 13px;
        width: 74%;
      }
    }
    .section-2-icon {
      padding-top: 14%;
      div {padding: 0;}
      .section-2-icon-title {
        color: $title-color;
        font-size: 22px;
        padding-left: 20%;
      }
      img {max-width: 100%}
      .section-2-icon-text {
        color: #FFFFFF;
        font-size: 32px;
      }
    }
  }
}
@include responsive('pc'){
  .index-img {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-image: url("@/assets/images/index/img1.png");
    min-height: 670px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .index-img-text{
      position: relative;
      font-size: 42px;
      color: white;
      line-height: 42px;
      span {
        font-size: 32px;
      }
      .mouse {
        position: absolute;
        bottom: -60px;
        right: -10px;
        width: 60px;
        z-index: 1;
      }
    }
  }
  .section-1 {
    background-color: #FFFFFF;
    min-height: 670px;
    padding: 60px 0;
    p {
      color: #000000;
      padding-top: 20px;
      max-width: 80%;
      margin: 0 auto;
    }
    .section-1-title {
      color: $title-color;
      font-size: 72px;
      font-weight: 700;
    }
    .section-1-text {
      padding: 20px;
      height: 360px;
      .section-1-img {
        height: 70%;
        border: 2px solid $title-color;
        border-radius: 15px;
        padding-top: 16px;
        img {
          max-width: 60%;
          min-height: 133px;
        }
        .section-1-text-title {
          padding-top: 8px;
          font-size: 22px;
        }
      }
    }
  }
  .section-2 {
    position: relative;
    background: radial-gradient(circle, rgb(55, 58, 56) 0%, rgb(28, 30, 36) 100%);
    min-height: 670px;
    padding-bottom: 60px;
    .section-2-img {
      position: absolute;
      top: -60px; /* 调整图片向上穿插 */
      left: 6%;
      height: 80%;
    }
    .section-2-title {
      padding-top: 4%;
      img {
        width: 70%;
        margin-top: 30%;
      }
      .section-2-title1 {
        color: $title-color;
        font-size: 42px;
      }
      .section-2-title2 {
        color: #FFFFFF;
        font-size: 42px;
      }
      p {
        font-size: 14px;
      }
    }
    .section-2-icon {
      padding-top: 26%;
      div {padding: 0;}
      .section-2-icon-title {
        color: $title-color;
        font-size: 26px;
        padding-left: 20%;
      }
      img {max-width: 100%}
      .section-2-icon-text {
        color: #FFFFFF;
        font-size: 42px;
      }
    }
  }
}
</style>