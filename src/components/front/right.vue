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
/* @import "../../assets/css/front/base.css"; */
#tags_cloud {
  position: relative;
  background-color: white;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.15);
}

#tags_cloud h4 {
  position: relative;
  display: block;
  width: 100%;
  height: 40px;
  font-size: 18px;
  border-radius: 3px;
  line-height: 40px;
  padding: 10px 20px 10px 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
}

#tags_cloud h4::after {
  position: absolute;
  width: 50px;
  display: block;
  height: 4px;
  bottom: -15px;
  background-color: #009688;
  content: "";
}

#tags_cloud > div {
  position: relative;
  display: block;
  padding: 10px 20px 20px 20px;
}

#tags_cloud a {
  display: inline-block;
  text-decoration: none;
  margin-left: 5px;
}

/* 近期文章 */
#recent_blog {
  position: relative;
  /* height: 400px; */
  margin: 40px 0px 0px 0px;
  background-color: white;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.15);
}

#recent_blog > h4 {
  position: relative;
  display: block;
  width: 100%;
  height: 40px;
  font-size: 18px;
  border-radius: 3px;
  line-height: 40px;
  padding: 10px 20px 10px 20px;
  margin-bottom: 30px;
  box-sizing: border-box;
}

#recent_blog > h4::after {
  position: absolute;
  width: 50px;
  display: block;
  height: 4px;
  bottom: -15px;
  background-color: #009688;
  content: "";
}

#recent_blog ul {
  padding-bottom: 20px;
}

#recent_blog li {
  list-style: none;
  width: 180px;
  margin: 0px auto;
  border-bottom: 1px solid #ddd;
  padding: 10px 20px 10px 10px;
  cursor: pointer;
}

#recent_blog li:nth-last-child(1) {
  border: none;
}

#recent_blog li a {
  color: #727272;
  font-size: 16px;
  text-decoration: none;
}

#recent_blog li a:hover {
  color: #009688;
}
</style>