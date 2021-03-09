<template>
  <div class="back_wrapper">
    <!-- 头部 -->
    <v-head></v-head>
    <!-- 侧边栏 -->
    <v-sidebar></v-sidebar>

    <!-- 内容区 -->
    <div class="content-box" :class="{ 'content-collapse': collapse }">
      <div class="back_content">
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList">
            <router-view></router-view>
          </keep-alive>
        </transition>
        <!-- 回到顶部 -->
        <!-- <el-backtop target=".back_content"></el-backtop> -->
      </div>
    </div>
  </div>
</template>

<script>
import vHead from "../../components/back/Header";
import vSidebar from "../../components/back/Sidebar.vue";
export default {
  data() {
    return {
      tagsList: [],
      collapse: false,
    };
  },
  components: {
    vHead,
    vSidebar,
  },
};
</script>

<style>
@import "../../assets/css/back/icon.css";
@import "../../assets/css/back/main.css";
</style>