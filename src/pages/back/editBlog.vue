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
          <mavon-editor
            class="md"
            ref="md"
            v-model="blog.content"
            :options="editorOption"
            @change="change"
            :ishljs="true"
            @imgAdd="handleEditorImgAdd"
            @imgDel="handleEditorImgDel"
          ></mavon-editor>
          <!-- <span class="wordNumber">{{ TiLength }}/10000</span> -->
        </el-form-item>
      </el-form>
      <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

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
      // 及时转的html
      html: "",
      editorOption: {
        placeholder: "Hello World"
      },
      TiLength: 0
    };
  },
  components: {
    mavonEditor
  },
  created() {
    this.getBlog();
  },
  methods: {
    getBlog() {
      // 数据回显
      // console.log(this.$route.query.row);
      this.blog = Object.assign({}, this.blog, this.$route.query.row);
    },
    // onEditorChange({ editor, html, text }) {
    //   this.content = html;
    // },
    handleEditorImgAdd(pos, $file) {
      // 第一步，将图片上传到服务器
      var formdata = new FormData();
      //这里的'image'即对应的是后台需要接受的参数名，如果有有配置，则需要和后台的参数名对应
      formdata.append("image", $file);
      this.$http({
        url: "server url", //图片上传接口路径
        method: "post",
        data: formdata,
        headers: { "Content-Type": "multipart/form-data" }
      }).then(url => {
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        // 图片回显到编辑器添加图片的位置
        $vm.$img2Url(pos, url);
        //或者使用以下方式回显
        //this.$refs.md.$img2Url(pos, url);
      });
    },
    change(value, render) {
      this.html = render;
    },
    submit() {
      const id = this.$route.query.id;
      // const $ = cheerio.load(html);
      // console.log(id);
      // let html = document
      //   .querySelector(".quill-editor")
      //   .innerHTML.replace(/<[^>]+>/g, "");
      // // this.blog.content = html;
      // // console.log(html);
      // html = `<div class="ql-container ql-snow"><div class="ql-editor">${html}
      //   </div></div>`;

      // 将提交的内容显示正常
      // $("[content]").val(html);
      // console.log(this.html);
      this.blog.content = this.html;
      console.log(this.blog.content);

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