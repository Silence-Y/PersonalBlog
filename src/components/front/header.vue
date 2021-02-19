<template>
  <div id="header">
    <!-- 导航 -->
    <header class="header-content">
      <!-- 导航页面 -->
      <div class="nav-content">
        <!-- 左侧 -->
        <div class="nav-fold">
          <span>Silence.Y 个人博客</span>
        </div>

        <!-- 右侧 -->
        <el-menu class="menu-nav" :default-active="currentPath" mode="horizontal" router>
          <el-menu-item index="/home">首页</el-menu-item>
          <el-menu-item index="/map">技术博客</el-menu-item>
          <el-menu-item index="#">随笔</el-menu-item>
          <el-menu-item index="/about">关于</el-menu-item>
          <el-menu-item index="/message">留言</el-menu-item>
        </el-menu>
      </div>
    </header>
    <!-- <div class="nav">
      <el-menu class="menu-nav" :default-active="currentPath" :collapse="isCollapse" router>
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/map">技术博客</el-menu-item>
        <el-menu-item index="#">随笔</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
        <el-menu-item index="/message">留言</el-menu-item>
      </el-menu>
    </div>-->
    <!-- 隐藏是右侧显示 -->
    <!-- <div class="drawer">
      <el-button class="btn" v-model="isCollapse" @click="handle">点击</el-button>
      <i class="el-icon-s-fold"></i>
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu
        class="el-menu-vertical-demo fold"
        :default-active="currentPath"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        router
      >
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/map">技术博客</el-menu-item>
        <el-menu-item index="#">随笔</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
        <el-menu-item index="/message">留言</el-menu-item>
      </el-menu>
    </div>-->

    <!-- 图片 banner -->
    <section id="banner">
      <a href>
        <img src="../../assets/img/img3.jpeg" alt />
      </a>

      <!-- <div class="site-text">
        <h1>Silence.Y</h1>
        <h2>{{ everyDay }}</h2>
      </div>-->
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPath: location.pathname,
      // 所有每日一句页面
      everyDay: "",
      isCollapse: true
    };
  },
  created() {
    this.getEveryDay();
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
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
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.menu-nav {
  border: none;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background-color: transparent;
}
</style>