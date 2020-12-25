<template>
  <div>
    <div id="blogComment">
      <div class="addComment" id="addComment">
        <p>发表评论</p>
        <input type="hidden" />
        <input type="text" placeholder="昵称" v-model="comments.user_name" />
        <input type="text" placeholder="邮箱" v-model="comments.email" />
        <textarea placeholder="无意义的内容我可能不会回复你" v-model="comments.content"></textarea>
        <span></span>
        <button @click="sendComment">发布评论</button>
      </div>

      <!-- 评论显示 -->
      <ul>
        <li v-for="(key, index) of commentsList" :key="index">
          <span>
            {{ key.user_name }}：发表于 {{ key.ctime }}
            <a>[回复]</a>
          </span>
          <p>{{ key.content }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      comments: {
        id: "",
        user_name: "",
        content: "",
        email: "",
        ctime: ""
      },
      commentsList: []
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    // 获取评论数据
    getComments() {
      this.$http.get("/api/comment").then(res => {
        // console.log(res.data.data.datas);
        this.commentsList = res.data.data.datas;
      });
    },
    sendComment() {
      // 获取时间;
      this.comments.ctime = moment().format("YYYY-MM-DD HH:mm:ss");
      this.$http.post("/api/comment", this.comments).then(res => {
        alert("提交成功");
        // console.log(res);
        this.getComments();
      });
    }
  }
};
</script>

<style>
@import "../../assets/css/front/comment.css";
</style>