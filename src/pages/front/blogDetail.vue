<template>
  <div>
    <div id="blogDetail">
      <!-- 详情页内容 -->
      <div class="bd_content">
        <!-- 标题 -->
        <h1>{{ currentPageBlog.title }}</h1>
        <!-- 作者 -->
        <h5>
          <i class="el-icon-user-solid"></i>
          Silence.Y
          <i class="el-icon-date"></i>
          {{ currentPageBlog.ctime }}
          <i class="el-icon-view"></i>
          {{ currentPageBlog.views }}人阅读
        </h5>
        <!-- <div class="text_mavonEditor"> -->
        <mavon-editor
          v-html="currentPageBlog.html_content"
          style="box-shadow:rgba(0, 0, 0)"
        >{{ currentPageBlog.content }}</mavon-editor>
        <!-- </div> -->
      </div>

      <!-- 代码高亮，写在 mavon-editor里-->
      <!-- codeStyle="atom-one-dark" -->
      <div class="line"></div>
      <!-- 上一篇和下一篇 -->
      <div class="other">
        <!-- 上一篇 -->
        <span>
          <i class="el-icon-back"></i>
          <a class="prev" @click="prevPage(prevPageBlog.id)">{{ prevPageBlog.title }}</a>
        </span>
        <span>
          <a class="next" @click="nextPage(nextPageBlog.id)">{{ nextPageBlog.title }}</a>
          <i class="el-icon-right"></i>
        </span>
      </div>
      <!-- <hr />
    
    <div class="other">
      <div
        v-for="other in otherBlogList "
        :key="other.id"
        :class="other.type"
        :title="other.title"
        @click="handleClick(other.id)"
      >{{other.title}}</div>
      </div>-->
    </div>
    <!-- 评论 -->
    <Comment></Comment>
  </div>
</template>

<script>
import "mavon-editor/dist/css/index.css";
import { mavonEditor } from "mavon-editor";
import Right from "../../components/front/right";
import Comment from "../../components/front/comment";
export default {
  data() {
    return {
      currentPageBlog: "",
      // 上一篇
      prevPageBlog: "",
      // 下一篇
      nextPageBlog: "",
      newId: this.$route.params.id,
      newViews: this.$route.params.views,
      curIndex: Number(this.$route.params.index),
      pageSize: 1, // 每页显示数量
      blogs: [],
      index: ""
    };
  },
  components: {
    Right,
    Comment,
    mavonEditor
  },
  created() {
    this.getBlog();
    // this.getCurrentPageDate();
  },
  methods: {
    // 获取当前页
    getBlog() {
      this.$http("/api/blog").then(res => {
        this.blogs = res.data.data.datas;
        // const curIndex = Number(this.$route.query.index);
        // 如果当前页是1，则是数组的第0位
        // 只有索引值大于0，才有上一篇，索引值为0，就是最上一篇
        this.currentPageBlog = this.blogs[this.curIndex];
        console.log(this.curIndex);
        // 如果是第一个
        if (this.curIndex == 0) {
          console.log("fsf");
          this.prevPageBlog = "";

          this.nextPageBlog = this.blogs[this.curIndex + 1];
          console.log(this.prevPageBlog);
          console.log(this.nextPageBlog);
        } else {
          this.prevPageBlog = this.blogs[this.curIndex - 1];
          this.nextPageBlog = this.blogs[this.curIndex + 1];
        }
        // console.log(this.curIndex);
        // 如果是最后一个
        if (this.curIndex == this.blogs.length) {
          this.prevPageBlog = this.blogs[this.curIndex - 1];
          this.nextPageBlog = "";
        } else {
          this.prevPageBlog = this.blogs[this.curIndex - 1];
          this.nextPageBlog = this.blogs[this.curIndex + 1];
        }

        // console.log(this.currentPageBlog);
        // console.log(this.prevPageBlog);
      });
    },
    // 上一篇
    prevPage(id) {
      if (this.curIndex == 0) {
        return;
      } else {
        this.curIndex--;
        this.$router.push({
          name: "blogDetail",
          params: {
            id: id
          }
        });
        this.getBlog();
      }
    },
    // 下一篇
    nextPage(id) {
      // console.log(this.curIndex);
      if (this.curIndex == this.blogs.length) {
        return;
      } else {
        this.curIndex++;
        // console.log(this.curIndex);
        this.$router.push({
          name: "blogDetail",
          params: {
            id: id
          }
        });
        this.getBlog();
      }
    },

    //  根据id查询
    // getBlog() {
    //   this.loading = true;
    //   // console.log(this.newId);
    //   // console.log(typeof Number(this.newViews));
    //   // this.$http.get("/api/blog/`${this.newId}`").then(res => {
    //   this.$http.get("/api/blog/" + this.newId).then(res => {
    //     // console.log(res.data.data);
    //     this.currentPageBlog = res.data.data;
    //     // 阅读量自增
    //     this.currentPageBlog.views = res.data.data.views + 1;
    //     this.submit();
    //   });
    // },
    // 增加阅读量
    submit() {
      this.currentPageBlog.views = Number(this.newViews) + 1;
      // console.log(this.blog.views);
      this.$http
        .put("/api/blog/" + this.newId, this.currentPageBlog)
        .then(res => {
          // console.log(res.data.data.views);
        });
    }
  }
};
</script>


<style scoped>
@import "../../assets/css/front/blogDetail.css";
</style>