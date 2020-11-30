<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-calendar"></i> 编辑文章
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <el-form :model="blog">
        <el-form-item label="标题" prop="title" label-width="50px">
          <el-input v-model="blog.title" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="标签" label-width="50px">
          <el-input v-model="blog.author" autocomplete="off"></el-input>
        </el-form-item>-->

        <el-form-item>
          <quill-editor
            ref="myTextEditor"
            v-model="blog.content"
            :options="editorOption"
            class="quill-editor ql-editor"
          ></quill-editor>
          <!-- <span class="wordNumber">{{ TiLength }}/10000</span> -->
        </el-form-item>
      </el-form>
      <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
import cheerio from "cheerio";
import moment from "moment";

export default {
  name: "editBlog",
  data: function() {
    return {
      // 新增或者编辑
      blog: {
        id: "",
        title: "",
        content: "",
        views: "",
        tag: "",
        ctime: ""
      },
      editorOption: {
        placeholder: "Hello World"
      },
      TiLength: 0
    };
  },
  components: {
    quillEditor
  },
  methods: {
    onEditorChange({ editor, html, text }) {
      this.content = html;
    },
    submit() {
      const id = this.$route.query.id;
      // const $ = cheerio.load(html);
      // console.log(id);
      let html = document
        .querySelector(".quill-editor")
        .innerHTML.replace(/<[^>]+>/g, "");
      // this.blog.content = html;
      // console.log(html);
      html = `<div class="ql-container ql-snow"><div class="ql-editor">${html}
        </div></div>`;

      // 将提交的内容显示正常
      // $("[content]").val(html);
      console.log(html);

      // this.blog.content = this.blog.content.replace(/<[^>]+>/g, "");

      if (id) {
        // 如果id存在就编辑
        this.blog.id = this.$route.query.id;
        this.blog.ctime = this.$route.query.newCtime;
        this.$http.put("/api/blog" + `/${id}`, this.blog).then(res => {
          // 编辑成功后跳转页面
          this.$router.push({ name: "posts" });
        });
      } else {
        this.blog.ctime = moment().format("YYYY-MM-DD HH:mm:ss");
        // console.log(this.blog.ctime);
        this.blog.views = 0;
        // 如果不存在，就新增
        this.$http.post("/api/blog", this.blog).then(res => {
          // console.log(res);
          // 新增成功后跳转页面
          this.$router.push({ name: "posts" });
        });
      }
      this.$message({
        type: "success",
        message: id ? "修改成功" : "新增成功"
      });
    }
  }
};
</script>

<style >
.editor-btn {
  margin-top: 20px;
}
</style>