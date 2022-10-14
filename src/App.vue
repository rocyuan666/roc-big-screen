<template>
  <div id="app">
    <ScaleBox>
      <router-view />
    </ScaleBox>
  </div>
</template>

<script>
import ScaleBox from "vue2-scale-box";
export default {
  name: "App",
  components: {
    ScaleBox,
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
