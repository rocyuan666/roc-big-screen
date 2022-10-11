<template>
  <div id="app">
    <RocScaleBox>
      <router-view />
    </RocScaleBox>
  </div>
</template>

<script>
import RocScaleBox from "roc-scale-box";
export default {
  name: "App",
  components: {
    RocScaleBox,
  },
};
</script>

<style>
@import "~@/assets/css/reset.css";
html {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #03050c;
}
</style>
