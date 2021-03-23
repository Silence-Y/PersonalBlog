<template>
  <div class="right">
    <!-- 公告栏 -->
    <div id="notice_board">
      <h4>公告栏</h4>
      <div class="wrap">
        <div class="public_notice">
          <p>
            大家好，个人博客系统实现了基本的功能，之后会一直迭代更新,欢迎大家提bug哈
          </p>
        </div>
      </div>
    </div>

    <!-- 随机标签云 -->
    <!-- <div id="tags_cloud">
      <h4>随机标签云</h4>
      <div>
        <a
          v-for="(tag, index) of data"
          :key="index"
          @click="handle(tag.t_name, tag.id)"
          :style="{ color: randColor(), fontSize: randSize() }"
          >{{ tag.t_name }}</a
        >
      </div>
    </div> -->

    <!-- 近期文章 -->
    <div id="recent_blog">
      <h4>近期文章</h4>
      <ul>
        <li v-for="(item, index) of currentBlog" :key="index">
          <router-link
            :to="{
              name: 'blogDetail',
              params: { id: item.id, views: item.views, index: index },
            }"
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
      blogList: [],
      currentBlog: [],
    };
  },
  props: ["data"],
  computed: {
    randColor: function () {
      return function () {
        var r = 50 + Math.floor(Math.random() * 200);
        var g = 50 + Math.floor(Math.random() * 200);
        var b = 50 + Math.floor(Math.random() * 200);
        return "rgb( " + r + ", " + g + ", " + b + ")";
      };
    },
    randSize: function () {
      return function () {
        return 15 + Math.floor(Math.random() * 30) + "px";
      };
    },
  },
  created() {
    this.getHotBlog();
  },
  methods: {
    // 获取文章
    getHotBlog() {
      this.$http.get("/api/blog").then((res) => {
        // const list = res.data.data.datas;
        this.blogList = res.data.data.datas;
        // this.recentBlog = this.blogList.splice(0, 5);
        // console.log(this.recentBlog);
        // console.log(this.blogList);
        this.currentBlog = this.blogList.slice(0, 5);
        console.log(this.currentBlog);
      });
    },
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
      // this.dropDownShow = false;
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/front/right.css";
</style>