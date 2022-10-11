/*
 * @作者：rocyuan（袁鹏）
 * @邮箱：rocyuan@luojing.top、rocyuan666@163.com
 * @微信：rocyuan666
 * @个人网站：https://luojing.top
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 导入进度条样式
import "nprogress/nprogress.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
