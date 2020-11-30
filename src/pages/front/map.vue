<template>
  <div>
    <h1>个人博客's Map</h1>
    <div><a href="/">个人博客首页</a> &gt;&gt; <a href="#">站点地图</a></div>
    <div>
      <h2>最新文章</h2>
      <ul id="blogs">
        <li v-for="(item, index) of blogList" :key="index">
          <router-link
            :to="{ path: 'blogDetail', query: { id: item.id } }"
            tag="a"
            >{{ item.title }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogList: []
    };
  },
  created() {
    this.getBlogs();
  },
  methods: {
    getBlogs() {
      this.loading = true;
      this.$http.get("/api/blog").then(res => {
        // console.log(res.data.data.datas);
        const list = res.data.data.datas;
        // console.log(list[0].id);
        this.blogList = list.reverse();
        // this.pageTotal = res.data.data.total;
      });
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/front/map.css";
</style>