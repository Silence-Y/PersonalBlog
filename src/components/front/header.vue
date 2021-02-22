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
        <el-menu
          class="menu-nav"
          :default-active="currentPath"
          mode="horizontal"
          router
        >
          <el-menu-item index="/home">首页</el-menu-item>
          <el-menu-item index="/map">博客</el-menu-item>
          <!-- <el-menu-item index="#">随笔</el-menu-item> -->
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
        <!-- <ul class="dropdown-ul">
          <li
            class="dropdown-li"
            v-for="(item,index) in menuList"
            :key="index"
            @click="toActiveMenuItem(item)"
          >{{ item.titleName }}</li>
        </ul>-->
        <el-menu class="menu-nav" :default-active="currentPath" router>
          <el-menu-item index="/home" @click="toActiveMenuItem()"
            >首页</el-menu-item
          >
          <el-menu-item index="/map" @click="toActiveMenuItem()"
            >博客</el-menu-item
          >
          <!-- <el-menu-item index="#" @click="toActiveMenuItem()"
            >随笔</el-menu-item
          > -->
          <el-menu-item index="/about" @click="toActiveMenuItem()"
            >关于</el-menu-item
          >
          <el-menu-item index="/message" @click="toActiveMenuItem()"
            >留言</el-menu-item
          >
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
      // menuList: [
      //   { activeName: "home", titleName: "首页", activeUrl: "/home" },
      //   { activeName: "map", titleName: "技术博客", activeUrl: "/map" },
      //   { activeName: "map", titleName: "随笔", activeUrl: "/map" },
      //   { activeName: "about", titleName: "关于", activeUrl: "/about" },
      //   { activeName: "message", titleName: "留言", activeUrl: "/message" }
      // ],
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
    toActiveMenuItem() {
      this.dropDownShow = false;
    },
    // toActiveMenuItem(item) {
    //   this.activeName = item.titleName;
    //   this.$router.push(item.activeUrl);
    //   this.dropDownShow = false;
    // },

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