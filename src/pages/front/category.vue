<template>
  <div id="blogList">
    <div class="tag">分类：{{ tag }}({{ blogsByTag.length }})</div>
    <ul>
      <li v-for="(item, index) of blogsByTag" :key="index">
        <!-- 标题 -->
        <router-link
          :to="{
            name: 'blogDetail',
            params: { id: item.id, views: item.views, index: index },
          }"
          tag="h2"
          >{{ item.title }}</router-link
        >

        <!-- 发布时间 -->
        <div class="items">
          <h5>
            <i class="el-icon-user-solid"></i>
            Silence.Y
            <i class="el-icon-date"></i>
            {{ item.ctime }}
            <i class="el-icon-tickets"></i>
            {{ item.tag }}
            <i class="el-icon-view"></i>
            {{ item.views }}人阅读
          </h5>
        </div>

        <!-- 内容区 -->
        <div class="swap">
          <!-- <div class="text" v-html="item.content">{{ ToText(item.content) }}</div> -->
          <p class="text">{{ ToText(item.html_content) }}...</p>
          <!-- 显示更多 -->
          <router-link
            :to="{
              path: 'blogDetail',
              query: { id: item.id, views: item.views, index: index },
            }"
            tag="p"
            class="read-more"
            >READ MORE</router-link
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tag: this.$store.state.activeTag,
      blogsByTag: [],
    };
  },
  created() {
    this.getTagList();
  },
  // 监听路由,解决进入同一页面不刷新问题
  // watch: {
  //   $route() {
  //     // console.log("路由发生了变化");
  //     this.tag = this.$store.state.activeTag;
  //     this.getTagList();
  //   },
  // },
  methods: {
    // 将html格式转为纯文本
    ToText(HTML) {
      var input = HTML;
      return input
        .replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi, "")
        .replace(/<[^>]+?>/g, "")
        .replace(/\s+/g, " ")
        .replace(/ /g, " ")
        .replace(/>/g, " ")
        .slice(0, 100); //截取100字符
    },
    getTagList() {
      this.$http
        .get("/api/blog", {
          params: {
            tag: this.tag,
          },
        })
        .then((res) => {
          // console.log(res.data.data.datas);
          this.blogsByTag = res.data.data.datas;
        });
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/front/home.css";
.tag {
  width: 100%;
  background-color: #fff;
  padding: 20px 0;
  margin-bottom: 20px;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  color: #009688;
}
</style>