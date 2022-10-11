/*
 * @作者：rocyuan（袁鹏）
 * @邮箱：rocyuan@luojing.top、rocyuan666@163.com
 * @微信：rocyuan666
 * @个人网站：https://luojing.top
 *
 * vuex 模块化 - user模块  储存token使用cookie做 “持久化”
 */
import cookie from "js-cookie";
import { tokenName } from "@/common/config";

const state = {
  token: cookie.get(tokenName),
};

export default {
  state,
};
