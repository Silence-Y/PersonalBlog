<template>
  <div class="content_right">
    <div id="tags_cloud">
      <h4>随机标签云</h4>
      <div>
        <a
          v-for="(key, index) of tags"
          :key="index"
          v-bind:href="key.url"
          :style="{ color: randColor(), fontSize: randSize() }"
        >{{ key.tag }}</a>
      </div>
    </div>

    <div id="recent_blog">
      <h4>近期文章</h4>
      <ul>
        <li v-for="(item, index) of blogList" :key="index">
          <router-link :to="{ path: 'blogDetail', query: { id: item.id } }" tag="a">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        { tag: "JavaScript", url: "http://www.baidu.com" },
        { tag: "HTML", url: "http://www.baidu.com" },
        { tag: "CSS", url: "http://www.baidu.com" },
        { tag: "ES6", url: "http://www.baidu.com" },
        { tag: "Vue", url: "http://www.baidu.com" },
        { tag: "React", url: "http://www.baidu.com" },
        { tag: "Node.js", url: "http://www.baidu.com" },
        { tag: "小程序", url: "http://www.baidu.com" },
        { tag: "Webpack", url: "http://www.baidu.com" },
        { tag: "git", url: "http://www.baidu.com" }
      ],
      blogList: []
    };
  },
  computed: {
    randColor: function() {
      return function() {
        var r = 50 + Math.floor(Math.random() * 200);
        var g = 50 + Math.floor(Math.random() * 200);
        var b = 50 + Math.floor(Math.random() * 200);
        return "rgb( " + r + ", " + g + ", " + b + ")";
      };
    },
    randSize: function() {
      return function() {
        return 15 + Math.floor(Math.random() * 30) + "px";
      };
    }
  },
  created() {
    this.getHotBlog();
  },
  methods: {
    getHotBlog() {
      this.$http.get("/api/blog").then(res => {
        // const list = res.data.data.datas;
        this.blogList = res.data.data.datas;
      });
    }
  }
};
</script>

<style >
@import "../../assets/css/front/right.css";
</style>