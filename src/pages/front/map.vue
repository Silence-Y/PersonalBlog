<template>
  <div class="content">
    <!-- 左边内容 -->
    <div class="content_left">
      <div id="map">
        <div class="nav">
          <h1>Silence.Y's Map</h1>
          <div class="item">
            <a href="/">个人博客首页</a> &gt;&gt;
            <a href="#">站点地图</a>
          </div>
        </div>

        <!-- 文章 -->
        <div class="catalogue">
          <h2>所有文章</h2>
          <ul id="blogs">
            <li v-for="(item, index) of blogList" :key="index">
              <router-link
                :to="{ path: 'blogDetail', query: { id: item.id } }"
                tag="a"
              >{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 右侧内容 -->
    <right></right>
  </div>
</template>

<script>
import Right from "../../components/front/right";
export default {
  data() {
    return {
      blogList: []
    };
  },
  components: {
    Right
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
        // this.blogList = list.reverse();
        this.blogList = res.data.data.datas;
        // this.pageTotal = res.data.data.total;
      });
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/front/map.css";
</style>