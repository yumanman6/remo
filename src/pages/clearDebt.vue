<script setup lang="ts">

import backgroundImgPc from "assets/images/pageBg/pageBg3.png";
import backgroundImgMo from "assets/images/pageBg/pageBg33.png";

//section1
import { onMounted,ref } from 'vue';
import { loadImgs } from '~/composables/loadImgs';
const section1infoUrls = import.meta.glob('@/assets/images/index/section1-icon*.png',{
  query: '?url', import: 'default'
});
const section3Array = ref([]);

const section3Items = ref([])

onMounted(async() => {
  await loadImgs(section1infoUrls,section3Array);
  section3Items.value =[
    {
      title: '息借貸的財',
      text: '嶄新的實體 + 網上特快貸款平台，借貸最快 5 分',
      src: section3Array.value[0],
    },
    {
      title: '息借貸的財',
      text: '嶄新的實體 + 網上特快貸款平台，借貸最快 5 分',
      src: section3Array.value[1],
    },
    {
      title: '息借貸的財',
      text: '嶄新的實體 + 網上特快貸款平台，借貸最快 5 分',
      src: section3Array.value[2],
    },
    {
      title: '息借貸的財',
      text: '嶄新的實體 + 網上特快貸款平台，借貸最快 5 分',
      src: section3Array.value[3],
    }
  ]
})
</script>

<template>
<div id="clear-debt">
  <page-bg :backgroundImgPc="backgroundImgPc"
           :backgroundImgMo="backgroundImgMo"
           imgTitle1="網上自助貸款"
           imgTitle2="極速Easy"
           imgText="Remo Credit 係一間專營網上貸款的財務公司，致力研發快捷又方便的貸款服務，貸款申請步驟簡單，只要在網上就能成功完成貸款所有程序，最快5分鐘完成批核。"
  ></page-bg>
  <div class="section-1">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="mb-md-0 mb-4 col-md-6 d-flex justify-content-center text-center">
          <div class="section-1-left">
            <img src="@/assets/images/clearDebt/section1-icon1.png" alt="">
            <p>息借貸的財</p>
          </div>
          <div class="section-1-right d-flex flex-column justify-content-center">
            <div>網上自助貸款</div>
            <p>嶄新的實體 + 網上特快貸款平台，借貸最快 5 分鐘批核，24 小時現金貸款到手</p>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-center text-center">
          <div class="section-1-left">
            <img src="@/assets/images/clearDebt/section1-icon2.png" alt="">
            <p>息借貸的財</p>
          </div>
          <div class="section-1-right d-flex flex-column justify-content-center">
            <div>網上自助貸款</div>
            <p>嶄新的實體 + 網上特快貸款平台，借貸最快 5 分鐘批核，24 小時現金貸款到手</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section-2">
    <div class="">
      <div class="row">
        <div class="section-2-bg bg1 col-md-6 d-flex flex-column justify-content-center align-items-start">
          <div>網上自助貸款</div>
          <p>嶄新的實體 + 網上特快貸款平台，借貸最快 5 分鐘批核，24 小時現</p>
          <a href="/apply">網上自助貸款</a>
        </div>
        <div class="section-2-bg bg2 col-md-6 d-flex flex-column justify-content-center align-items-end text-end">
          <div>網上自助貸款</div>
          <p>嶄新的實體 + 網上特快貸款平台，借貸最快 5 分鐘批核，24 小時現</p>
          <a href="/apply">網上自助貸款</a>
        </div>
        <div class="section-2-bg bg3 col-md-6 d-flex flex-column justify-content-center align-items-start">
          <div>網上自助貸款</div>
          <p>嶄新的實體 + 網上特快貸款平台，借貸最快 5 分鐘批核，24 小時現</p>
          <a href="/apply">網上自助貸款</a>
        </div>
        <div class="section-2-bg bg4 col-md-6 d-flex flex-column justify-content-center align-items-end text-end">
          <div>網上自助貸款</div>
          <p>嶄新的實體 + 網上特快貸款平台，借貸最快 5 分鐘批核，24 小時現</p>
          <a href="/apply">網上自助貸款</a>
        </div>
      </div>
    </div>
    <img class="section-2-img" src="@/assets/images/clearDebt/section2-icon5.png" alt="">
  </div>
  <div class="section-3">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="section-3-title wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">網上自助貸款</div>
        <p class="wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">嶄新的實體 + 網上特快貸款平台，借貸最快 5 分鐘批核，24 小時現金貸款到手，全港智能櫃員機即攞現金。嶄新的實體款平台，借貸最快 5 分鐘批核，24 小時現金貸款到手，全港智能櫃員機即攞現金。</p>
        <div class="col-md-3 col-6 section-3-text wow animate__animated"
             :class="[index % 2 === 0 ? 'animate__fadeInUp' : 'animate__fadeInDown']"
             :data-wow-delay="`${0.3 + index * 0.2}s`"
             v-for="(info,index) in section3Items"
             :key="index">
          <div class="section-3-img d-flex justify-content-center align-items-center">
            <div>
              <img :src="info.src" alt="">
              <div class="section-3-text-title">{{info.title}}</div>
            </div>
          </div>
          <p>{{info.text}}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="section-4">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="section-4-title d-flex flex-column justify-content-center align-items-start">
            <div>網上自助貸款</div>
            <p>嶄新的實體 + 網上特快貸款平台，借貸最快 5 分鐘批核，24 小時現</p>
            <a href="/apply">網上自助貸款</a>
          </div>
          <div class="section-4-icon">
            <div class="section-2-icon-title">信用卡轉戶</div>
            <div class="row justify-content-center align-items-center">
              <div class="col-md-3 col-2"></div>
              <div class="col-2">
                <img src="@/assets/images/index/section2-icon1.png" alt="">
              </div>
              <div class="col-6 section-2-icon-text">7折轉戶</div>
            </div>
          </div>
          <div class="section-4-icon">
            <div class="section-2-icon-title">循環貸款轉戶</div>
            <div class="row justify-content-center align-items-center">
              <div class="col-md-3 col-2"></div>
              <div class="col-2">
                <img src="@/assets/images/index/section2-icon1.png" alt="">
              </div>
              <div class="col-6 section-2-icon-text">6折轉戶</div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img class="section-4-img" src="@/assets/images/clearDebt/section4-icon2.png" alt="">
        </div>
      </div>
    </div>
  </div>
  <calculator></calculator>
</div>
</template>

<style scoped lang="scss">
#clear-debt {
  overflow: hidden;
}
@include responsive('mobile') {
  #clear-debt {
    .section-1 {
      background-color: #FFFFFF;
      min-height: 400px;
      padding: 60px 0;
      .section-1-left {
        width: 40%;
        padding: 10px 10px;
        background: linear-gradient(90deg, #F7BD0D 0%, #FFD700 100%);
        border: 2px solid #F7AC3B;
        border-radius: 15px;
        img {
          max-width: 100%;
          max-height: 60px;
        }
        p {
          margin: 10px 0 0 0;
          font-size: 14px;
        }
      }
      .section-1-right {
        text-align: start;
        font-size: 26px;
        font-weight: 700;
        padding-left: 20px;
        p {
          color: #000000;
          font-size: 14px;
        }
      }
    }
    .section-2 {
      .section-2-img {
        height: 0;
      }
      .section-2-bg {
        min-height: 400px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        font-size: 32px;
        font-weight: 700;
        color: #FFFFFF;
        p {
          font-size: 16px;
          margin-top: 20px;
        }
        a {
          height: 40px;
          width: 160px;
          margin-top: 16px;
          background-color: #FFD03E;
          color: #000000;
          border-radius: 15px;
          text-align: center;
          font-size: 16px;
          font-weight: 600;
          line-height: 40px;
        }
      }
      .bg1 {
        padding: 0 20%;
        background-image: url('@/assets/images/clearDebt/section2-icon1.png');
      }
      .bg2 {
        padding: 0 20%;
        background-image: url('@/assets/images/clearDebt/section2-icon2.png');
      }
      .bg3 {
        padding: 0 20%;
        background-image: url('@/assets/images/clearDebt/section2-icon3.png');
      }
      .bg4 {
        padding: 0 20%;
        background-image: url('@/assets/images/clearDebt/section2-icon4.png');
      }
    }
    .section-3 {
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
      .section-3-title {
        color: $title-color;
        font-size: 30px;
        font-weight: 700;
      }
      .section-3-text {
        padding: 40px 10px 0;
        height: 300px;
        .section-3-img {
          height: 70%;
          border: 2px solid $title-color;
          border-radius: 15px;
          padding-top: 16px;
          img {
            max-width: 60%;
            min-height: 80px;
          }
          .section-3-text-title {
            padding-top: 8px;
            font-size: 18px;
          }
        }
      }
    }
    .section-4 {
      background-color: #FFFFFF;
      min-height: 670px;
      padding: 60px 0;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      background-image: url('@/assets/images/clearDebt/section4-icon1.png');
      .section-4-title {
        font-size: 32px;
        font-weight: 700;
        color: #000000;
        text-align: center;
        padding-bottom: 60px;
        div {
          width: 100%;
        }
        p {
          color: #000000;
          font-size: 16px;
          margin-top: 20px;
        }
        a {
          height: 40px;
          width: 160px;
          margin: 16px auto;
          background-color: #000000;
          color: #FFD03E;
          border-radius: 15px;
          text-align: center;
          font-size: 16px;
          font-weight: 600;
          line-height: 40px;
        }
      }
      .section-4-icon {
        div {padding: 0;}
        color: #000000;
        .section-2-icon-title {
          text-align: center;
          font-size: 26px;
        }
        img {max-width: 100%}
        .section-2-icon-text {
          font-size: 42px;
        }
      }
      .section-4-img {
        width: 60%;
        margin: 30px 20% 0;
      }
    }
  }
}
@include responsive('pc') {
  #clear-debt {
    .section-1 {
      background-color: #FFFFFF;
      min-height: 260px;
      padding: 60px 0;
      .section-1-left {
        width: 40%;
        padding: 10px 20px;
        background: linear-gradient(90deg, #F7BD0D 0%, #FFD700 100%);
        border: 2px solid #F7AC3B;
        border-radius: 15px;
        img {
          max-width: 100%;
          max-height: 80px;
        }
        p {margin: 10px 0 0 0;}
      }
      .section-1-right {
        text-align: start;
        font-size: 32px;
        font-weight: 700;
        padding-left: 20px;
        p {
          color: #000000;
          font-size: 16px;
        }
      }
    }
    .section-2 {
      position: relative;
      .section-2-img {
        position:absolute;
        transform: translate(-50%,-50%);
        top: 50%;
        left: 50%;
        width: 36%;
      }
      .section-2-bg {
        min-height: 400px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        font-size: 32px;
        font-weight: 700;
        color: #FFFFFF;
        p {
          font-size: 16px;
          margin-top: 20px;
        }
        a {
          height: 40px;
          width: 160px;
          margin-top: 16px;
          background-color: #FFD03E;
          color: #000000;
          border-radius: 15px;
          text-align: center;
          font-size: 16px;
          font-weight: 600;
          line-height: 40px;
        }
      }
      .bg1 {
        padding: 0 20% 0 4%;
        background-image: url('@/assets/images/clearDebt/section2-icon1.png');
      }
      .bg2 {
        padding: 0 4% 0 20%;
        background-image: url('@/assets/images/clearDebt/section2-icon2.png');
      }
      .bg3 {
        padding: 0 20% 0 4%;
        background-image: url('@/assets/images/clearDebt/section2-icon3.png');
      }
      .bg4 {
        padding: 0 4% 0 20%;
        background-image: url('@/assets/images/clearDebt/section2-icon4.png');
      }
    }
    .section-3 {
      background-color: #FFFFFF;
      min-height: 670px;
      padding: 60px 0;
      p {
        color: #000000;
        padding-top: 20px;
        max-width: 80%;
        margin: 0 auto;
      }
      .section-3-title {
        color: $title-color;
        font-size: 72px;
        font-weight: 700;
      }
      .section-3-text {
        padding: 20px;
        height: 360px;
        .section-3-img {
          height: 70%;
          border: 2px solid $title-color;
          border-radius: 15px;
          padding-top: 16px;
          img {
            max-width: 60%;
            min-height: 133px;
          }
          .section-3-text-title {
            padding-top: 8px;
            font-size: 22px;
          }
        }
      }
    }
    .section-4 {
      background-color: #FFFFFF;
      min-height: 670px;
      padding: 60px 0;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      background-image: url('@/assets/images/clearDebt/section4-icon1.png');
      .section-4-title {
        font-size: 32px;
        font-weight: 700;
        color: #000000;
        padding-left: 30%;
        padding-bottom: 60px;
        p {
          color: #000000;
          font-size: 16px;
          margin-top: 20px;
        }
        a {
          height: 40px;
          width: 160px;
          margin-top: 16px;
          background-color: #000000;
          color: #FFD03E;
          border-radius: 15px;
          text-align: center;
          font-size: 16px;
          font-weight: 600;
          line-height: 40px;
        }
      }
      .section-4-icon {
        div {padding: 0;}
        color: #000000;
        .section-2-icon-title {
          font-size: 26px;
          padding-left: 30%;
        }
        img {max-width: 100%}
        .section-2-icon-text {
          font-size: 42px;
        }
      }
      .section-4-img {
        margin-left: 10%;
        width: 50%;
      }
    }
  }
}
</style>