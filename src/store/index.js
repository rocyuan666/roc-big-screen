/*
 * @作者：rocyuan（袁鹏）
 * @邮箱：rocyuan@luojing.top、rocyuan666@163.com
 * @微信：rocyuan666
 * @个人网站：https://luojing.top
 *
 * vuex 模块化, modules目录存放的js文件为vuex模块文件 require.context 会自动加载
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const modules = {};
const files = require.context("./modules", false, /\.js$/);
files.keys().forEach((url) => {
  modules[url.replace(/(modules\.|\/|\.|js)/g, "")] = {
    ...files(url).default,
    namespaced: true,
  };
});

export default new Vuex.Store({
  modules,
});
