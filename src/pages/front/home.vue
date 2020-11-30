<template>
  <div>
    <div class="content">
      <!-- 左侧内容 -->
      <div class="content_left">
        <!-- 每日一句 -->
        <div id="everyDay">
          <span class="everyDayTitle">每日一句</span>
          <p>{{ everyDay }}</p>
        </div>

        <!-- 博客 -->
        <div id="blogList">
          <ul>
            <li v-for="(item, index) of blogs" :key="index">
              <router-link
                :to="{
                  path: 'blogDetail',
                  query: { id: item.id, views: item.views }
                }"
                tag="span"
              >{{ item.title }}</router-link>
              <!-- <span>{{item.title}}</span> -->

              <!-- 富文本显示-->
              <div class="ql-container ql-snow">
                <p class="ql-editor text" v-html="item.content">{{ item.content }}</p>
              </div>
              <!-- <p>{{ item.content }}</p> -->

              <div class="items">
                <span>发布于{{ item.ctime }} | 浏览({{ item.views }})</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- 分页 -->

      <!-- 右侧内容 -->
      <Right></Right>
    </div>
  </div>
</template>

<script>
import Right from "../../components/front/right";
export default {
  data() {
    return {
      // 所有每日一句页面
      everyDay: "",
      blogs: []
    };
  },
  created() {
    this.getEveryDay();
    this.getBlogs();
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
    },
    // 获取博客
    getBlogs() {
      this.loading = true;
      this.$http("/api/blog").then(res => {
        this.blogs = res.data.data.datas;
      });
    }
  },
  components: {
    Right
  }
};
</script>

<style>
@import "../../assets/css/front/index.css";
@import "../../assets/css/front/base.css";
</style>

