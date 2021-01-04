<template>
  <!-- 博客 -->
  <div id="blogList">
    <ul class>
      <li v-for="(item, index) of blogs" :key="index">
        <!-- 标题 -->
        <router-link
          :to="{
                  path: 'blogDetail',
                  query: { id: item.id, views: item.views }
                }"
          tag="h2"
        >{{ item.title }}</router-link>

        <!-- 发布时间 -->
        <div class="items">
          <h5>发布于{{ item.ctime }} | {{ item.views }}人阅读</h5>
        </div>

        <!-- 内容区 -->
        <div class="swap">
          <div class="ql-editor text" v-html="item.content">{{ item.content }}</div>
          <!-- 显示更多 -->
          <router-link
            :to="{
                  path: 'blogDetail',
                  query: { id: item.id, views: item.views }
                }"
            tag="h4"
            class="read-more"
          >READ MORE</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: []
    };
  },
  created() {
    this.getBlogs();
  },
  methods: {
    // 获取博客
    getBlogs() {
      this.loading = true;
      this.$http("/api/blog").then(res => {
        this.blogs = res.data.data.datas;
      });
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/front/home.css";
</style>

