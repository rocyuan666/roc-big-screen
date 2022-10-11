/*
 * @作者：rocyuan（袁鹏）
 * @邮箱：rocyuan@luojing.top、rocyuan666@163.com
 * @微信：rocyuan666
 * @个人网站：https://luojing.top
 *
 * vuex 模块化 - about模块
 */
import { getBannerList } from "@/api/about";

const state = {
  banner: [],
};

const getter = {};

const mutations = {
  setBanner: (state, data) => {
    state.banner = data;
  },
};

const actions = {
  async getBanner({ commit }) {
    const res = await getBannerList();
    if (res.code == 200) {
      commit("setBanner", res.banners);
    }
  },
};

export default {
  state,
  getter,
  mutations,
  actions,
};
