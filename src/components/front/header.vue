<template>
  <div class="header">
    <div class="header_content" id="search">
      <!-- <span>Silence个人博客 | 技术博客</span> -->
      <span>Silence 个人博客</span>
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
      <input type="text" placeholder="输入关键词查找" />
      <button>搜索</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 搜索
    // sendSearch() {}
  }
};
</script>

<style scoped>
@import "../../assets/css/front/base.css";
</style>