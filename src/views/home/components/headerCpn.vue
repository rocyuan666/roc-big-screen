<template>
  <div class="header-cpn">
    <div class="icon-left"></div>
    <div class="icon-right"></div>
    <div class="icon-light"></div>
    <div class="title-box">
      <span class="title-text">大数据分析</span>
    </div>
    <div class="timers">{{ dateYear }} {{ dateWeek }} {{ dateDay }}</div>
  </div>
</template>

<script>
import utils from "@/common/utils";
const { formatTime } = utils;
export default {
  name: "headerCpn",
  data() {
    return {
      timing: null,
      dateYear: null,
      dateWeek: null,
      dateDay: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    };
  },
  created() {
    this.timeFn();
  },
  beforeDestroy() {
    clearInterval(this.timing);
  },
  methods: {
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), "HH: mm: ss");
        this.dateYear = formatTime(new Date(), "yyyy-MM-dd");
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.header-cpn {
  height: 60px;
  background-image: url("@/assets/img/headers/top.png");
  background-size: cover;
  background-position: center center;
  position: relative;
  margin-bottom: 4px;
  margin-top: 4px;
  .icon-left,
  .icon-right {
    position: absolute;
    top: -2px;
    width: 140px;
    height: 6px;
    background-image: url("@/assets/img/headers/icon-left.png");
  }

  .icon-left {
    left: 11%;
  }

  .icon-right {
    right: 11%;
    transform: rotate(180deg);
  }

  .icon-light {
    position: absolute;
    bottom: -26px;
    background-image: url("@/assets/img/headers/icon-light.png");
    background-position: 80px center;
    width: 100%;
    height: 56px;
  }
  .title-box {
    position: relative;
    text-align: center;
    background-size: cover;
    color: transparent;
    height: 60px;
    line-height: 46px;
    .title-text {
      font-size: 38px;
      font-weight: 900;
      letter-spacing: 6px;
      width: 100%;
      background: linear-gradient(
        92deg,
        #0072ff 0%,
        #00eaff 48.8525390625%,
        #01aaff 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .timers {
    position: absolute;
    right: 20px;
    top: 26px;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #fff;
  }
}
</style>
