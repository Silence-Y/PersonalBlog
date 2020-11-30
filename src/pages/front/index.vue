<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "../../components/front/header";

export default {
  data() {
    return {};
  },
  components: {
    Header
  }
};
</script>

<style scoped>
@import "../../assets/css/front/base.css";
</style>

