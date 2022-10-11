<template>
  <div class="home-container">
    <HeaderCpn />
  </div>
</template>

<script>
import HeaderCpn from "./components/headerCpn.vue";
export default {
  name: "Home",
  components: {
    HeaderCpn,
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;
  background: url(@/assets/img/bg.png) no-repeat;
  background-size: 100% 100%;
}
</style>
