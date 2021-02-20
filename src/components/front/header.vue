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

        <!-- 右侧按钮 -->
        <div id="bars" @click="dropDownShow = !dropDownShow">
          <div>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </div>
        </div>
      </div>
    </header>

    <!-- 下拉菜单 -->
    <transition name="dropdown-fade-show">
      <div v-show="dropDownShow" class="dropdown">
        <el-menu class="menu-nav" :default-active="currentPath" router>
          <el-menu-item index="/home">首页</el-menu-item>
          <el-menu-item index="/map">技术博客</el-menu-item>
          <el-menu-item index="#">随笔</el-menu-item>
          <el-menu-item index="/about">关于</el-menu-item>
          <el-menu-item index="/message">留言</el-menu-item>
        </el-menu>
      </div>
    </transition>

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
      isCollapse: true,
      dropDownShow: false, // 控制下拉菜单显示
      activeName: "" // 导航栏激活名称
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