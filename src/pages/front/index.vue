<template>
  <div class="wrapper">
    <!-- 头部 -->
    <Header></Header>
    <!-- 中间内容 -->
    <div class="content">
      <!-- 左侧内容 -->
      <div class="content_left">
        <router-view></router-view>
      </div>
      <!-- 右侧内容 -->
      <Right></Right>
    </div>
    <!-- 底部 -->
    <!-- <footer></footer> -->
  </div>
</template>

<script>
import Header from "../../components/front/header";
import Right from "../../components/front/right";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Right
  }
};
</script>

<style >
@import "../../assets/css/front/base.css";
</style>

