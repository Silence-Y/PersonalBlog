<template>
  <div class="header">
    <!-- 导航 -->
    <div class="header_content" id="search">
      <!-- <span>Silence个人博客 | 技术博客</span> -->
      <span>Silence.Y 个人博客</span>
      <ul>
        <li>
          <a href="/">首页</a>
        </li>
        <li>
          <a href="/map">地图</a>
        </li>
        <li>
          <a href="/about">关于</a>
        </li>
        <li>
          <a href="/message">留言</a>
        </li>
      </ul>
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
@import "../../assets/css/front/base.css";
</style>