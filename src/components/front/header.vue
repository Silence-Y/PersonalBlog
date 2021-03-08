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
          <el-submenu index="">
            <template slot="title">分类</template>
            <el-menu-item
              v-for="(tag, index) in data"
              :key="index"
              @click="handle(tag.t_name, tag.id)"
            >
              {{ tag.t_name }}
            </el-menu-item>
          </el-submenu>
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
          <el-menu-item index="/home" @click="toActiveMenuItem()"
            >首页</el-menu-item
          >
          <el-menu-item index="/map" @click="toActiveMenuItem()"
            >博客</el-menu-item
          >

          <el-submenu index="" class="category">
            <template slot="title">分类</template>
            <el-menu-item
              v-for="(tag, index) in data"
              :key="index"
              @click="handle(tag.t_name, tag.id)"
            >
              {{ tag.t_name }}
            </el-menu-item>
          </el-submenu>

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
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      currentPath: location.pathname,
      // 所有每日一句页面
      everyDay: "",
      isCollapse: true,
      dropDownShow: false, // 控制下拉菜单显示
      activeName: "", // 导航栏激活名称
      // tagList: []
      tagId: ""
    };
  },
  props: ["data"],
  methods: {
    // Vuex的使用
    handle(val, id) {
      // this.activeTag = val;
      // 修改标签的值。提交action
      this.$store.dispatch("changeTag", val);
      // console.log(this.$store.state.activeTag);
      this.$router.push({
        name: "category",
        params: {
          id: val
        }
      });
      this.dropDownShow = false;
    },
    toActiveMenuItem() {
      this.dropDownShow = false;
    }

    // 获取每日一句
    // getEveryDay() {
    //   this.$http.get("/api/everyDay/getLastEveryDay").then(res => {
    //     // 获取最新的每日一句
    //     // console.log(res.data.data);
    //     this.everyDay = res.data.data.content;
    //     // console.log(everyDay);
    //   });
    // }
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
.category {
  padding-left: 50px;
}
</style>