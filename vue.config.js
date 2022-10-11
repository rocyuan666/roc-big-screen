/*
 * @Author: Roc Yuan
 * @Date: 2020年11月24日11:29:13
 * @LastEditTime: 2020年11月24日11:29:20
 * @Description: vue mobile template
 * @FilePath: \roc-cli-vue-template\vue.config.js
 */

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  productionSourceMap: false,
  devServer: {
    host: "localhost",
    port: 8080,
    open: true,
    // 代理
    // proxy: {
    //   "/api": {
    //     target: "https://api.github.com",
    //     changeOrigin: true,
    //     ws: false,
    //     pathRewrite: {
    //       "^/api": ""
    //     }
    //   }
    // }
  },
});
