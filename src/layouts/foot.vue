<template>
    <div id="foot">
        <div class="container">
          <div class="row align-items-center foot-title">
            <div class="col-md-2 col-5 foot-logo">
              <img src="@/assets/images/foot/logo.png" alt="">
            </div>
            <div class="col-md-4 col-7 foot-icon">
              <img src="@/assets/images/foot/icon1.png" alt="">
              <img src="@/assets/images/foot/icon2.png" alt="">
              <img src="@/assets/images/foot/icon1.png" alt="">
              <img src="@/assets/images/foot/icon2.png" alt="">
            </div>
          </div>
          <div class="row align-items-center foot-texts">
            <div class="col-md-6">
              <div class="foot-text">
                <div>放債人牌照號碼: 0000/8888</div>
                <div>忠告: 借錢梗要還，咪俾錢中介</div>
                <div>客戶服務／投訴熱線： 8888 8888</div>
              </div>
              <div class="foot-text">
                <div>本網站所列之資訊謹供參考並會不時更新。 <br>
                  欲了解詳情，請電郵至本公司 cash@reloan.hk查詢。
                </div>
              </div>
              <div class="foot-text">
                <div>
                  分期貸款概要：<br>
                  1.還款期最短為2個月及最長為60個月。<br>
                  2.實際年利率最高為48%<br>
                  3.簡述貸款有關費用如下以作參考：<br>
                  -貸款額:HK$10,000<br>
                  -實際年利率16%<br>
                  -12個月之分期貸款，每月還款額為HK$907<br>
                  -總還款額：HK$10884
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="foot-text">
                <div>放債人牌照號碼: 0000/8888</div>
                <div>忠告: 借錢梗要還，咪俾錢中介</div>
                <div>客戶服務／投訴熱線： 8888 8888</div>
              </div>
              <div class="foot-text">
                <div>本網站所列之資訊謹供參考並會不時更新。 <br>
                  欲了解詳情，請電郵至本公司 cash@reloan.hk查詢。
                </div>
              </div>
              <div class="foot-text">
                <div>
                  分期貸款概要：<br>
                  1.還款期最短為2個月及最長為60個月。<br>
                  2.實際年利率最高為48%<br>
                  3.簡述貸款有關費用如下以作參考：<br>
                  -貸款額:HK$10,000<br>
                  -實際年利率16%<br>
                  -12個月之分期貸款，每月還款額為HK$907<br>
                  -總還款額：HK$10884
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
#foot {
  padding: 60px 0 80px;
  background-color: #333333;
  color: #FFFFFF;
}
@include responsive('mobile'){
  #foot {
    padding-left: 30px;
  }
  .foot-logo img {
    height: 60px;
  }
  .foot-icon {
    height: 60px;
    img {
      width: 32px;
      margin-right:10px;
      margin-top:18px;
    }
  }
  .foot-texts {
    .foot-text {
      padding-top: 40px;
      font-size: 20px;
    }
  }
}
@include responsive('pc'){
  .foot-logo img {
    height: 80px;
  }
  .foot-icon {
    height: 80px;
    img {
      width: 32px;
      margin-right:15px;
      margin-top:30px;
    }
  }
  .foot-texts {
    .foot-text {
      padding-top: 40px;
      font-size: 20px;
    }
  }
}
</style>
