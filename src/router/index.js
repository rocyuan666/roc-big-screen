/*
 * @作者：rocyuan（袁鹏）
 * @邮箱：rocyuan@luojing.top、rocyuan666@163.com
 * @微信：rocyuan666
 * @个人网站：https://luojing.top
 *
 * 路由模块
 */
import Vue from "vue";
import VueRouter from "vue-router";

// 懒加载路由组件
const Home = () => import("@/views/home");

Vue.use(VueRouter);

// 配置路由
const routes = [
  // 重定向
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      title: "首页",
    },
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.matched[0].meta.title) {
    document.title = to.matched[0].meta.title;
  }
  next();
});

export default router;
