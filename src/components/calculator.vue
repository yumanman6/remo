<script setup lang="ts">
import { ref, watch } from "vue";

const loanAmount = ref<number | null>(0); // 贷款金额
const loanTerm = ref<number | null>(0);   // 供款期（月份）
const annualRate = ref<number | null>(0); // 年利率

const monthlyPayment = ref<number>(0); // 每月还款金额（默认值为 0）
const totalPayment = ref<number>(0);   // 还款总金额（默认值为 0）

// 计算每月还款金额和还款总金额
const calculateLoan = () => {
  const loan = loanAmount.value || 0; // 贷款金额
  const term = loanTerm.value || 0;   // 供款期
  const rate = annualRate.value || 0; // 年利率

  if (loan > 0 && term > 0 && rate > 0) {
    const monthlyRate = rate / 12 / 100; // 月利率
    const numPayments = term; // 总期数

    // 等额本息公式计算每月还款金额
    const monthly =
        (loan * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
        (Math.pow(1 + monthlyRate, numPayments) - 1);

    monthlyPayment.value = parseFloat(monthly.toFixed(2)); // 每月还款金额
    totalPayment.value = parseFloat((monthly * numPayments).toFixed(2)); // 还款总金额
  } else {
    // 如果任何输入框未完成，则显示 0
    monthlyPayment.value = 0;
    totalPayment.value = 0;
  }
};

// 使用 watch 监听输入框的值变化并实时更新结果
watch([loanAmount, loanTerm, annualRate], calculateLoan);

// 初始化计算（第一次渲染时显示结果为 0）
calculateLoan();
</script>

<template>
  <div id="calculator">
    <div class="c-bg">
      <div class="c-body wow animate__animated animate__fadeIn" data-wow-delay="0.1s">
        <div class="c-title d-flex justify-content-center align-items-center">私人貸款計算機</div>
        <!-- 计算器 -->
        <div class="calculator-form">
          <div class="mb-md-3 mb-1">
            <label for="loanAmount" class="form-label">貸款金額 (HK$)*</label>
            <input
                type="number"
                id="loanAmount"
                class="form-control"
                v-model="loanAmount"
                placeholder="请输入贷款金额"
            />
          </div>
          <div class="mb-md-3 mb-1">
            <label for="loanTerm" class="form-label">貸款期數 (月)*</label>
            <input
                type="number"
                id="loanTerm"
                class="form-control"
                v-model="loanTerm"
                placeholder="请输入供款期"
            />
          </div>
          <div class="mb-md-3 mb-1">
            <label for="annualRate" class="form-label">年利率 (%)*</label>
            <input
                type="number"
                id="annualRate"
                class="form-control"
                v-model="annualRate"
                placeholder="请输入年利率"
            />
          </div>
          <!-- 计算结果 -->
          <div class="result mt-md-4 mt-2">
            <p>每月分期付款(HK$): <strong>{{ monthlyPayment }}</strong></p>
            <p>含利息總金額(HK$): <strong>{{ totalPayment }}</strong></p>
          </div>
        </div>
        <div class="c-btn d-flex justify-content-center align-items-center">
          <a href="#" class="d-flex justify-content-center align-items-center">
            <img src="@/assets/images/calculator/c-btn.png" alt="">
            網上申請
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@include responsive('mobile'){
  #calculator {
    .c-bg {
      position: relative;
      background-image: url("@/assets/images/calculator/calculatorBg2.jpg");
      min-height: 800px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
    }
    .c-body {
      position: absolute;
      right: 5%;
      top: 50%;
      width: 90%;
      height: 46%;
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
        font-size: 26px;
      }
      .calculator-form {
        margin-top: 10px;
        padding: 10px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

        .form-label {
          font-weight: bold;
          font-size: 14px;
        }
        .form-control {
          height: 26px;
        }

        .result {
          text-align: center;
          font-size: 16px;
          font-weight: bold;
          p{
            margin: 0;
            color: #000000;
          }
        }
      }
      .c-btn {
        width: 100%;
        height: 40px;

        a {
          height: 100%;
          width: 40%;
          margin-top: 10px;
          background-color: $title-color;
          text-align: center;
          border: 10px solid transparent;
          border-image-source: url('@/assets/images/calculator/border.png');
          border-image-slice: 30;
          border-image-repeat: stretch;
          text-decoration: none; // 移除下划线
          color: #FFFFFF;
        }
        img {
          margin-right: 5px;
          height: 24px;
          width: auto;
        }
      }
    }
  }
}
@include responsive('pc') {
  #calculator {
    .c-bg {
      position: relative;
      background-image: url("@/assets/images/calculator/calculatorBg.jpg");
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
        font-size: 26px;
      }
      .calculator-form {
        margin-top: 20px;
        padding: 15px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

        .form-label {
          font-weight: bold;
        }

        .result {
          text-align: center;
          font-size: 18px;
          font-weight: bold;
          p{
            color: #000000;
          }
        }
      }
      .c-btn {
        width: 100%;
        height: 40px;

        a {
          height: 100%;
          width: 40%;
          margin-top: 18px;
          background-color: $title-color;
          text-align: center;
          border: 10px solid transparent;
          border-image-source: url('@/assets/images/calculator/border.png');
          border-image-slice: 30;
          border-image-repeat: stretch;
          text-decoration: none; // 移除下划线
          color: #FFFFFF;
        }
        img {
          margin-right: 12px;
          height: 24px;
          width: auto;
        }
      }
    }
  }
}
</style>
