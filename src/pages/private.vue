<script setup lang="ts">
import backgroundImgPc from '@/assets/images/pageBg/pageBg1.png'
import backgroundImgMo from '@/assets/images/pageBg/pageBg11.png'

import { useWindowSize } from '@vueuse/core';
// 检测屏幕宽度
const { width } = useWindowSize();
const isMobile = computed(() => width.value < 768);

import { onMounted,ref } from 'vue';
import { loadImgs } from '~/composables/loadImgs';
const section1infoUrls = import.meta.glob('@/assets/images/private/section1-icon*.png',{
  query: '?url', import: 'default'
});
const section1Array = ref([]);

const section1Items = ref([])

onMounted(async() => {
  await loadImgs(section1infoUrls,section1Array);
  section1Items.value =[
    {
      title: '網上自助貸款',
      src: section1Array.value[0],
    },
    {
      title: '網上自助貸款',
      src: section1Array.value[1],
    },
    {
      title: '網上自助貸款',
      src: section1Array.value[2],
    }
  ]
})

</script>

<template>
<div id="private">
  <page-bg :backgroundImgPc="backgroundImgPc"
           :backgroundImgMo="backgroundImgMo"
           imgTitle1="網上自助貸款"
           imgTitle2="極速Easy"
           imgText="Remo Credit 係一間專營網上貸款的財務公司，致力研發快捷又方便的貸款服務，貸款申請步驟簡單，只要在網上就能成功完成貸款所有程序，最快5分鐘完成批核。"
  ></page-bg>
  <div class="section-1">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="section-1-title wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">網上自助貸款</div>
        <p class="wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">嶄新的實體 + 網上特快貸款平台，借貸最快 5 分鐘批核，24 小時現金貸款到手，全港智能櫃員機即攞現金。嶄新的實體款平台，借貸最快 5 分鐘批核，24 小時現金貸款到手，全港智能櫃員機即攞現金。</p>
        <div class="col-md-4 col-10 section-1-text wow animate__animated"
             :class="[index % 2 === 0 ? 'animate__fadeInUp' : 'animate__fadeInDown']"
             :data-wow-delay="`${0.3 + index * 0.2}s`"
             v-for="(info,index) in section1Items"
             :key="index">
          <div class="section-1-img d-flex justify-content-center align-items-center">
            <div style="background: linear-gradient(to right, orange, yellow);">
              <img :src="info.src" alt="">
              <div class="section-1-text-title">{{info.title}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section-2">
    <div class="container">
      <div class="row">
        <div class="col-md-4 section-2-icon wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
          <div class="section-2-icon-title">重置TU轉戶</div>
          <div class="row justify-content-center align-items-center">
            <div class="col-md-1 col-2"></div>
            <div class="col-3">
              <img src="@/assets/images/index/section2-icon1.png" alt="">
            </div>
            <div class="col-7 section-2-icon-text">8折轉戶</div>
          </div>
        </div>
        <div class="col-md-4 section-2-icon wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
          <div class="section-2-icon-title">信用卡轉戶</div>
          <div class="row justify-content-center align-items-center">
            <div class="col-md-1 col-2"></div>
            <div class="col-3">
              <img src="@/assets/images/index/section2-icon1.png" alt="">
            </div>
            <div class="col-7 section-2-icon-text">7折轉戶</div>
          </div>
        </div>
        <div class="col-md-4 section-2-icon wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
          <div class="section-2-icon-title">循環貸款轉戶</div>
          <div class="row justify-content-center align-items-center">
            <div class="col-md-1 col-2"></div>
            <div class="col-3">
              <img src="@/assets/images/index/section2-icon1.png" alt="">
            </div>
            <div class="col-7 section-2-icon-text">6折轉戶</div>
          </div>
        </div>
        <div class="section-2-text wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
          嶄新的實體 + 網上特快貸款平台，<br>
          借貸最快 5 分鐘批核，24 小時現金貸款到手，<br>
          全港智能櫃員機即攞現金。嶄新的實體款平台，<br>
          借貸最快 5 分鐘批核，24 小時現金貸款到手，<br>
          全港智能櫃員機即攞現金。
        </div>
<!--        <img v-show="!isMobile" class="section-2-car wow animate__animated animate__pulse" src="@/assets/images/private/section2-icon2.png" alt="">-->
      </div>
    </div>
  </div>
  <div class="section-3">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="section-3-title wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">網上自助貸款</div>
        <p class="wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">嶄新的實體 + 網上特快貸款平台，借貸最快 5 分鐘批核，24 小時現金貸款到手，全港智能櫃員機即攞現金。嶄新的實體款平台，借貸最快 5 分鐘批核，24 小時現金貸款到手，全港智能櫃員機即攞現金。</p>
        <div class="section-3-text pt-5 col-md-4 col-10 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
          <img src="@/assets/images/private/section3-icon1.png" alt="">
        </div>
        <div class="section-3-text pt-5 col-md-4 col-10 wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
          <img src="@/assets/images/private/section3-icon2.png" alt="">
        </div>
        <div class="section-3-text section-3-text-bg pt-5 col-md-4 col-10 wow animate__animated animate__fadeInUp" data-wow-delay="0.7s">
          <img src="@/assets/images/private/section3-icon3.png" alt="">
          <img class="section-3-text-icon" src="@/assets/images/private/section3-icon4.png" alt="">
        </div>
      </div>
    </div>
  </div>
  <div class="section-4">
    <div class="container">
      <div class="row justify-content-center">
        <div class="section-4-left col-md-4 wow animate__animated animate__fadeInLeft" data-wow-delay="0.2s">
          <img src="@/assets/images/private/section4-img.png" alt="">
          <div>網上自助貸款</div>
          <p>嶄新的實體 + 網上特快貸款平台，借貸最快 5 分鐘批核，24 小時現金貸款到手，全港智能櫃員機即攞現金。</p>
        </div>
        <div class="section-4-right col-md-7 wow animate__animated animate__fadeInRight" data-wow-delay="0.1s">
            <div class="section-4-right-title d-flex justify-content-center align-items-center wow animate__animated animate__fadeInRight" data-wow-delay="0.2s">
              <img src="@/assets/images/index/icon1.png" alt="">
              <div >網上自助貸款</div>
            </div>
            <p class="wow animate__animated animate__fadeInRight" data-wow-delay="0.3s">嶄新的實體 + 網上特快貸款平台，借貸最快 5 分鐘批核，<br>24 小時現金貸款到手，全港智能櫃員機即攞現金。</p>
          <div class="section-4-right-bg1 mt-4 wow animate__animated animate__fadeInRight" data-wow-delay="0.3s">
            <div class="right-bt"></div>
            <div class="white-bg row d-flex justify-content-around align-items-center">
              <div class="section-4-right-1 col-3 d-flex justify-content-center align-items-center">01</div>
              <div class="section-4-right-2 col-6 d-flex flex-column justify-content-center">
                <div>借貸最快 5 分</div>
                嶄新的實體 + 網上特快貸款平台，借貸最快 5 分
              </div>
              <div class="section-4-right-3 col-3 d-flex justify-content-around align-items-center">
                <img src="@/assets/images/private/section4-icon1.png" alt="">
              </div>
            </div>
          </div>
          <div class="section-4-right-bg2 mt-4 wow animate__animated animate__fadeInRight" data-wow-delay="0.5s">
            <div class="right-bt"></div>
            <div class="white-bg row d-flex justify-content-around align-items-center">
              <div class="section-4-right-1 col-3 d-flex justify-content-center align-items-center">01</div>
              <div class="section-4-right-2 col-6 d-flex flex-column justify-content-center">
                <div>借貸最快 5 分</div>
                嶄新的實體 + 網上特快貸款平台，借貸最快 5 分
              </div>
              <div class="section-4-right-3 col-3 d-flex justify-content-around align-items-center">
                <img src="@/assets/images/private/section4-icon2.png" alt="">
              </div>
            </div>
          </div>
          <div class="section-4-right-bg1 mt-4 wow animate__animated animate__fadeInRight" data-wow-delay="0.7s">
            <div class="right-bt"></div>
            <div class="white-bg row d-flex justify-content-around align-items-center">
              <div class="section-4-right-1 col-3 d-flex justify-content-center align-items-center">01</div>
              <div class="section-4-right-2 col-6 d-flex flex-column justify-content-center">
                <div>借貸最快 5 分</div>
                嶄新的實體 + 網上特快貸款平台，借貸最快 5 分
              </div>
              <div class="section-4-right-3 col-3 d-flex justify-content-around align-items-center">
                <img src="@/assets/images/private/section4-icon3.png" alt="">
              </div>
            </div>
          </div>
          <div class="section-4-right-bg2 mt-4 wow animate__animated animate__fadeInRight" data-wow-delay="0.9s">
            <div class="right-bt"></div>
            <div class="white-bg row d-flex justify-content-around align-items-center">
              <div class="section-4-right-1 col-3 d-flex justify-content-center align-items-center">01</div>
              <div class="section-4-right-2 col-6 d-flex flex-column justify-content-center">
                <div>借貸最快 5 分</div>
                嶄新的實體 + 網上特快貸款平台，借貸最快 5 分
              </div>
              <div class="section-4-right-3 col-3 d-flex justify-content-around align-items-center">
                <img src="@/assets/images/private/section4-icon4.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
  </div>
  <div class="section-5">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="section-5-title wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">網上自助貸款</div>
        <p class="mb-md-5 mb-3 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">嶄新的實體 + 網上特快貸款平台，借貸最快 5 分鐘批核，24 小時現金貸款到手，全港智能櫃員機即攞現金。嶄新的實體款平台，借貸最快 5 分鐘批核，24 小時現金貸款到手，全港智能櫃員機即攞現金。</p>
        <div class="section-5-text col-md-3 col-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
          <img src="@/assets/images/private/section5-icon1.png" alt="">
          <div>借貸最快 5 分</div>
          <p>嶄新的實體 + 網上特快貸款平台，借貸最快 5 分</p>
        </div>
        <div class="section-5-text col-md-3 col-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
          <img src="@/assets/images/private/section5-icon2.png" alt="">
          <div>借貸最快 5 分</div>
          <p>嶄新的實體 + 網上特快貸款平台，借貸最快 5 分</p>
        </div>
        <div class="section-5-text col-md-3 col-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.7s">
          <img src="@/assets/images/private/section5-icon3.png" alt="">
          <div>借貸最快 5 分</div>
          <p>嶄新的實體 + 網上特快貸款平台，借貸最快 5 分</p>
        </div>
        <div class="section-5-text col-md-3 col-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.9s">
          <img src="@/assets/images/private/section5-icon4.png" alt="">
          <div>借貸最快 5 分</div>
          <p>嶄新的實體 + 網上特快貸款平台，借貸最快 5 分</p>
        </div>
      </div>
    </div>
  </div>
  <calculator></calculator>
</div>
</template>

<style scoped lang="scss">
@include responsive('mobile') {
  #private {
    overflow: hidden;
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
          height: 100%;
          border-radius: 15px;
          padding-top: 16px;
          img {
            max-width: 100%;
            min-height: 80px;
          }
          .section-1-text-title {
            padding: 10px 0;
            font-size: 18px;
          }
        }
      }
    }
    .section-2 {
      position: relative;
      background-image: url("@/assets/images/private/section2-icon1.png");
      background-size: 100% auto;
      background-position: center bottom;
      background-repeat: no-repeat;
      background-color: #1E2320;
      min-height: 1000px;
      padding: 0 0 60px;
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
      .section-2-text {
        padding-top: 14%;
        color: #FFFFFF;
        text-align: center;
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
        height: 680px;
        img {
          height: 100%;
        }
      }
      .section-3-text-bg {
        position: relative;
        .section-3-text-icon {
          position: absolute;
          top: 36%;
          left: 62%;
          transform: translate(-50%, -50%);
          height: 22%;
          z-index: 1;
        }
      }
    }
    .section-4 {
      min-height: 670px;
      .section-4-left {
        background-color: $title-color;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 60px;
        img {
          margin-top: 4%;
          max-width: 70%;
        }
        div {
          margin-top: 10%;
          font-size: 42px;
          font-weight: 700;
          letter-spacing: 3px;
        }
        p {
          margin-top: 6%;
          width: 90%;
          line-height: 34px;
        }
      }
      .section-4-right {
        background: radial-gradient(circle, #2e3136 0%, #202326 60%, #181a1d 100%);
        padding: 60px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .section-4-right-title {
          color: #FFFFFF;
          font-size: 36px;
          img {
            max-width: 6%;
            margin-right: 2%;
          }
        }
        p {
          width: 80%;
          margin-top: 6%;

        }
        .section-4-right-bg1 {
          position: relative;
          width: 90%;
          height: 14%;
          padding: 2px 6%;
          background-color: $title-color;
          border-bottom-right-radius: 20px;
          border-top-right-radius: 20px;
          .right-bt {
            position: absolute;
            right: 3%;
            top: 10%;
            width: 3%;
            height: 80%;
            border-radius: 20px;
            background-color: #181a1d;
          }
          .white-bg {
            height: 98%;
            width: 100%;
            padding: 0 6%;
            background-color: #FFFFFF;
            .section-4-right-1 {
              height: 86%;
              background-color: $title-color;
              border-radius: 5px;
              color: #FFFFFF;
              font-size: 36px;
            }
            .section-4-right-2 {
              height: 100%;
              font-size: 12px;
              div {
                font-size: 14px;
                font-weight: 600;
              }
            }
            .section-4-right-3 {
              img {height: 40px}
            }
          }
        }
        .section-4-right-bg2 {
          position: relative;
          width: 90%;
          height: 14%;
          padding: 2px 6%;
          background-color: #2e3136 ;
          border-bottom-right-radius: 20px;
          border-top-right-radius: 20px;
          .right-bt {
            position: absolute;
            right: 3%;
            top: 10%;
            width: 3%;
            height: 80%;
            border-radius: 20px;
            background-color: #181a1d;
          }
          .white-bg {
            height: 98%;
            width: 100%;
            padding: 0 6%;
            background-color: #FFFFFF;
            .section-4-right-1 {
              height: 86%;
              background-color: #2e3136;
              border-radius: 5px;
              color: #FFFFFF;
              font-size: 36px;
            }
            .section-4-right-2 {
              height: 100%;
              font-size: 12px;
              div {
                font-size: 14px;
                font-weight: 600;
              }
            }
            .section-4-right-3 {
              img {height: 40px}
            }
          }
        }
      }
    }
    .section-5 {
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
      .section-5-title {
        color: $title-color;
        font-size: 30px;
        font-weight: 700;
      }
      .section-5-text {
        img {
          height: 120px;
          margin-top: 30px;
        }
        div {
          padding-top: 40px;
          font-size: 18px;
          font-weight: 700;
        }
        p {padding: 0;}
      }
    }
  }
}
@include responsive('pc') {
  #private {
    overflow: hidden;
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
        font-size: 68px;
        font-weight: 700;
      }
      .section-1-text {
        padding: 20px;
        height: 320px;
        .section-1-img {
          height: 100%;
          border-radius: 15px;
          padding-top: 16px;
          img {
            max-width: 100%;
            min-height: 133px;
          }
          .section-1-text-title {
            padding: 8px 0;
            font-size: 22px;
          }
        }
      }
    }
    .section-2 {
      position: relative;
      background-image: url("@/assets/images/private/section2-icon1.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      min-height: 670px;
      padding: 60px 0;
      .section-2-icon {
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
      .section-2-text {
        position: absolute;
        top: 38%;
        right: 4%;
        max-width: 28%;
        padding: 10px 10px 20px 10px;
        border: 1px solid $title-color;
        font-size: 15px;
        color: #FFFFFF;
      }
      //.section-2-car {
      //  position: absolute;
      //  top: 43%;
      //  left: 4%;
      //  width: 77%;
      //}
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
        font-size: 68px;
        font-weight: 700;
      }
      .section-3-text {
        height: 780px;
        img {
          height: 100%;
        }
      }
      .section-3-text-bg {
        position: relative;
        .section-3-text-icon {
          position: absolute;
          top: 36%;
          left: 62%;
          transform: translate(-50%, -50%);
          height: 22%;
          z-index: 1;
        }
      }
    }
    .section-4 {
      background-image: url("@/assets/images/private/section4-bg.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      min-height: 670px;
      padding: 60px 0;
      .section-4-left {
        img {
          margin-top: 4%;
          max-width: 70%;
        }
        div {
          margin-top: 10%;
          font-size: 42px;
          font-weight: 700;
          letter-spacing: 3px;
        }
        p {
          margin-top: 6%;
          width: 90%;
          line-height: 34px;
        }
      }
      .section-4-right {
        .section-4-right-title {
          color: #FFFFFF;
          font-size: 36px;
          img {
            max-width: 6%;
            margin-right: 2%;
          }
        }
        p {
          width: 70%;
          margin: 20px 0 0 30%;
        }
        .section-4-right-bg1 {
          position: relative;
          width: 76%;
          height: 18%;
          padding: 2px 6%;
          margin-left: 32%;
          background-color: $title-color;
          border-bottom-right-radius: 20px;
          border-top-right-radius: 20px;
          .right-bt {
            position: absolute;
            right: 3%;
            top: 10%;
            width: 3%;
            height: 80%;
            border-radius: 20px;
            background-color: #181a1d;
          }
          .white-bg {
            height: 98%;
            width: 100%;
            padding: 0 6%;
            background-color: #FFFFFF;
            .section-4-right-1 {
              height: 86%;
              background-color: $title-color;
              border-radius: 5px;
              color: #FFFFFF;
              font-size: 36px;
            }
            .section-4-right-2 {
              height: 100%;
              font-size: 14px;
              div {
                font-size: 16px;
                font-weight: 600;
              }
            }
            .section-4-right-3 {
              img {height: 40px}
            }
          }
        }
        .section-4-right-bg2 {
          position: relative;
          width: 76%;
          height: 18%;
          padding: 2px 6%;
          margin-left: 32%;
          background-color: #2e3136 ;
          border-bottom-right-radius: 20px;
          border-top-right-radius: 20px;
          .right-bt {
            position: absolute;
            right: 3%;
            top: 10%;
            width: 3%;
            height: 80%;
            border-radius: 20px;
            background-color: #181a1d;
          }
          .white-bg {
            height: 98%;
            width: 100%;
            padding: 0 6%;
            background-color: #FFFFFF;
            .section-4-right-1 {
              height: 86%;
              background-color: #2e3136;
              border-radius: 5px;
              color: #FFFFFF;
              font-size: 36px;
            }
            .section-4-right-2 {
              height: 100%;
              font-size: 14px;
              div {
                font-size: 16px;
                font-weight: 600;
              }
            }
            .section-4-right-3 {
              img {height: 40px}
            }
          }
        }
      }
    }
    .section-5 {
      background-color: #FFFFFF;
      min-height: 670px;
      padding: 60px 0;
      p {
        color: #000000;
        padding-top: 20px;
        max-width: 80%;
        margin: 0 auto;
      }
      .section-5-title {
        color: $title-color;
        font-size: 68px;
        font-weight: 700;
      }
      .section-5-text {
        img {height: 160px;}
        div {
          padding-top: 40px;
          font-size: 18px;
          font-weight: 700;
        }
        p {padding: 0;}
      }
    }
  }
}
</style>