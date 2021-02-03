<template>
  <div>
    <div id="blogDetail">
      <!-- 详情页内容 -->
      <div class="bd_content">
        <!-- 标题 -->
        <h1>{{ blog.title }}</h1>
        <!-- 作者 -->
        <h5>
          <i class="el-icon-user-solid"></i>
          Silence.Y
          <i class="el-icon-date"></i>
          {{ blog.ctime }}
          <i class="el-icon-view"></i>
          {{ blog.views }}人阅读
        </h5>
        <!-- <div class="text_mavonEditor"> -->
        <mavon-editor v-html="blog.html_content" style="box-shadow:rgba(0, 0, 0)">{{ blog.content }}</mavon-editor>
        <!-- </div> -->
      </div>

      <!-- 代码高亮，写在 mavon-editor里-->
      <!-- codeStyle="atom-one-dark" -->
      <div class="line"></div>
      <!-- 上一篇和下一篇 -->
      <div class="other">
        <div class="prev">上一篇</div>
        <div class="next">下一篇</div>
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
      blog: "",
      newId: this.$route.query.id,
      newViews: this.$route.query.views,
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
    // this.getBlogs();
    this.previous();
  },
  methods: {
    // 查询上一篇和下一篇
    // 调取外面列表的接口，将传过来的值给接口利用filter来获取id
    // handleClick(id) {
    //   this.$router.push({
    //     name: "blogDetail",
    //     params: {
    //       id
    //     }
    //   });
    // },
    // 获取博客列表
    // getBlogs() {
    //   // this.loading = true;

    //   this.$http("/api/blog").then(res => {
    //     const self = this;
    //     // 博客列表
    //     this.blogs = res.data.data.datas;
    //     console.log(this.blogs);
    //     // 过滤出当前博客信息的id值，获取当前博客信息的索引
    //     // value是单个博客的信息
    //     const filterData = this.blogs.filter(function(v, i) {
    //       // 如果是当前博客，就让它的索引为i,v是
    //       if (v.id == self.$route.query.id) {
    //         // const index = i;
    //         self.index = i;
    //         return v;
    //         // return { v, index };
    //       }
    //       // 这个就是当前博客的信息
    //       // this.data=filterData[0]
    //     });
    //     // return this.index;
    //     // console.log(this);
    //     // console.log(this.index); //1
    //   });
    //   console.log(this);
    //   console.log(this.index);
    // },

    previous() {
      // console.log(this);
      // console.log(this.index);
      // if (this.index > 0) {
      //   this.index -= 1;
      //   this.blog = this.blogs[this.index];
      //   // console.log(this.blog);
      // }
      this.$http.get("/api/blog/getPrevBlog" + this.newId).then(res => {
        console.log(res);
      });
    },

    // next() {},
    //  根据id查询
    getBlog() {
      this.loading = true;
      // console.log(typeof Number(this.newViews));
      // this.$http.get("/api/blog/`${this.newId}`").then(res => {
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
  }
};
</script>


<style scoped>
@import "../../assets/css/front/blogDetail.css";
.line {
  border-top: 1px dotted #000;
  width: 95%;
  height: 100%;
  margin: 0 auto;
}
.other {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  height: 100%;
  padding: 40px 0;
}
</style>