<template>
  <div class="content">
    <!-- 左侧内容 -->
    <div class="content_left">
      <div id="blogDetail">
        <h1>{{ blog.title }}</h1>
        <span>
          作者:Silence.Y 发布于: {{ blog.ctime }} 浏览({{
          blog.views
          }})
        </span>
        <!-- 富文本样式显示 -->
        <div class="ql-container ql-snow">
          <div id="blog_content" class="ql-editor" v-html="blog.content">{{ blog.content }}</div>
        </div>
        <!-- <div id="blog_content">{{ blog.content }}</div> -->
      </div>

      <!-- 评论 -->
      <Comment></Comment>
    </div>

    <!-- 右侧内容 -->
    <right></right>
  </div>
</template>

<script>
import "quill/dist/quill.snow.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";

import Right from "../../components/front/right";
import Comment from "../../components/front/comment";
export default {
  data() {
    return {
      blog: "",
      newId: this.$route.query.id,
      newViews: this.$route.query.views
    };
  },
  created() {
    this.getBlog();
  },
  methods: {
    //  根据id查询
    getBlog() {
      this.loading = true;
      // console.log(typeof Number(this.newViews));
      this.$http.get("/api/blog/" + this.newId).then(res => {
        // console.log(res.data.data);
        this.blog = res.data.data;
        // 阅读量自增
        this.blog.views = res.data.data.views + 1;
        this.submit();
      });
    },
    // 增加阅读量
    submit() {
      this.blog.views = Number(this.newViews) + 1;
      // console.log(this.blog.views);
      this.$http.put("/api/blog/" + this.newId, this.blog).then(res => {
        // console.log(res.data.data.views);
      });
    }
  },
  components: {
    Right,
    Comment
  }
};
</script>


<style scoped>
@import "../../assets/css/front/blogDetail.css";
</style>