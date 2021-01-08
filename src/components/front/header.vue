<template>
  <div class="header">
    <!-- 导航 -->
    <div class="header_content" id="search">
      <span>Silence.Y 个人博客</span>

      <el-menu class="menu-nav" :default-active="currentPath" router>
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/map">地图</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
        <el-menu-item index="/message">留言</el-menu-item>
      </el-menu>
    </div>

    <!-- 图片 -->
    <div class="site-header">
      <h1>Silence.Y</h1>
      <!-- 每日一句 -->
      <h2>{{ everyDay }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPath: location.pathname,
      // 所有每日一句页面
      everyDay: ""
    };
  },
  created() {
    this.getEveryDay();
  },
  methods: {
    // 获取每日一句
    getEveryDay() {
      this.$http.get("/api/everyDay/getLastEveryDay").then(res => {
        // 获取最新的每日一句
        // console.log(res.data.data);
        this.everyDay = res.data.data.content;
        // console.log(everyDay);
      });
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/front/header.css";
.menu-nav {
  border: none;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background-color: transparent;
}
</style>