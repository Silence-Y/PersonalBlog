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
      tagId: "",
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
          id: val,
        },
      });
      this.dropDownShow = false;
    },
    toActiveMenuItem() {
      this.dropDownShow = false;
    },

    // 获取每日一句
    // getEveryDay() {
    //   this.$http.get("/api/everyDay/getLastEveryDay").then(res => {
    //     // 获取最新的每日一句
    //     // console.log(res.data.data);
    //     this.everyDay = res.data.data.content;
    //     // console.log(everyDay);
    //   });
    // }
  },
};
</script>

<style>
#header {
  position: relative;
  width: 100%;
}

.header-content {
  background: white;
  /* 顶部导航固定 */
  position: fixed;
  top: 0px;
  z-index: 999;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 60px;
}

.header-content .nav-content {
  width: 85%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.nav-content .nav-fold {
  display: flex;
  align-items: center;
}

.nav-content .nav-fold span {
  font-size: 20px;
  font-weight: 600;
}

/* 移动端导航 */
#bars {
  display: flex;
  align-items: center;
}

#bars .icon-bar {
  background-color: #333;
  margin: 5px 0;
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
}

/* 下拉菜单 */

.dropdown {
  position: absolute;
  /* top: 60px; */
  width: 100%;
  height: 240px;
  background: #fff;
  z-index: 999;
  position: fixed;
}

/* .dropdown .dropdown-ul {
  height: 100%;
  padding: 20px 0;
}

.dropdown .dropdown-li {
  width: 60%;
  height: 18%;
  margin-left: 50px;
  font-size: 14px;
} 
.dropdown .dropdown-li:hover {
  cursor: pointer;
}*/

.dropdown .el-menu-item {
  width: 60%;
  margin-left: 50px;
}

.el-menu-item.is-active {
  color: #009688;
}

.dropdown-fade-show-enter-active {
  animation: fadeShow 0.25s;
}

.dropdown-fade-show-leave-to {
  animation: fadeShow 0.25s reverse;
}

@keyframes fadeShow {
  0% {
    transform-origin: 0 top;
    transform: scaleY(0);
    opacity: 0;
  }

  100% {
    transform-origin: 0 top;
    transform: scaleY(1);
    opacity: 1;
  }
}

/* 图片 */
#banner {
  text-align: center;
  margin-bottom: 3em;
  margin-top: 60px;
}

#banner a img {
  width: 100%;
}

/* 调整头部信息 */
@media screen and (min-width: 769px) {
  #banner {
    margin-bottom: 2em;
  }

  #bars {
    display: none;
  }

  .dropdown {
    display: none;
  }
}

@media (max-width: 768px) {
  .nav-content .drawer {
    display: block;
  }

  .nav-content .nav-fold span {
    font-size: 16px;
  }

  .nav-content .menu-nav {
    display: none;
  }

  .header-content ul {
    width: 160px;
  }

  .header-content ul li {
    width: 40px;
  }

  #banner {
    margin-bottom: 1.5em;
  }
}

/* #banner .site-text {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

#banner h1 {
  position: relative;
  color: #fff;
  font-size: 63px;
  font-weight: 700;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
}

#banner h1::after {
  position: absolute;
  width: 70px;
  display: block;
  height: 3px;
  left: 50%;
  margin-left: -30px;
  bottom: -15px;
  background-color: #fff;
  content: "";
}

#banner h2 {
  position: relative;
  display: block;
  color: #fff;
  margin-top: 40px;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
} */

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