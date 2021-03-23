<template>
  <div>
    <div id="blogComment">
      <div class="addComment">
        <p>发表评论</p>
        <input type="hidden" />
        <input type="text" placeholder="昵称" v-model="comments.user_name" />
        <input type="text" placeholder="邮箱" v-model="comments.email" />
        <textarea
          placeholder="无意义的内容我可能不会回复你……"
          v-model="comments.content"
        ></textarea>
        <span></span>
        <button @click="sendComment">发表评论</button>
      </div>

      <!-- 评论显示 -->
      <ul>
        <li v-for="(key, index) of commentsList" :key="index">
          <!-- <span> -->
          <!-- {{ key.user_name }}：发表于 {{ key.ctime }} -->
          <!-- <a>[回复]</a> -->
          <!-- </span> -->

          <!-- 回复人 -->
          <div class="comment-author">
            <img src="../../assets/img/img1.jpg" alt />
            <!-- <p>{{ key.user_name }}</p> -->
            <b>{{ key.user_name }}</b>
            <span>说道：</span>
          </div>

          <!-- 回复时间 -->
          <div class="comment-ctime">{{ key.ctime }}</div>

          <!-- 回复内容 -->
          <div class="comment-content">
            <p>{{ key.content }}</p>
          </div>
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
        ctime: "",
      },
      commentsList: [],
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    // 获取评论数据
    getComments() {
      this.$http.get("/api/comment").then((res) => {
        // console.log(res.data.data.datas);
        this.commentsList = res.data.data.datas;
      });
    },
    sendComment() {
      // 获取时间;
      this.comments.ctime = moment().format("YYYY-MM-DD HH:mm:ss");
      this.$http.post("/api/comment", this.comments).then((res) => {
        alert("提交成功");
        // console.log(res);
        this.getComments();
        this.comments.user_name = "";
        this.comments.email = "";
        this.comments.content = "";
      });
    },
  },
};
</script>

<style>
#blogComment {
  width: 100%;
  margin: 20px 0px 0px 0px;
}

.addComment {
  margin-top: 20px;
  width: 100%;
  /* height: 450px; */
  background: white;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.15);
}

.addComment p {
  padding: 20px 30px;
  font-size: 28px;
  font-weight: 600;
}

.addComment input {
  width: 40%;
  height: 30px;
  border-radius: 5px;
  margin: 10px 50px;
  padding: 5px;
}

.addComment textarea {
  width: 80%;
  height: 200px;
  border-radius: 5px;
  border: 1px solid #000;
  margin: 5px 50px;
  padding: 5px;
  font-size: 16px;
}

.addComment button {
  width: 100px;
  font-size: 16px;
  background-color: #455a64;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 20px 50px;
  padding: 8px 5px;
}

.addComment button:hover {
  background: gray;
}

/* 评论显示 */
#blogComment ul {
  width: 100%;
  background: white;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.15);
  margin-bottom: 40px;
}

#blogComment ul li {
  list-style: none;
  padding: 10px 50px;
}

#blogComment ul li .comment-author {
  font-size: 18px;
  display: flex;
  align-items: center;
}

#blogComment ul li .comment-author img {
  width: 40px;
  height: 40px;
  top: 20px;
  margin-right: 10px;
  border-radius: 50%;
}

#blogComment ul li .comment-author b {
  font-weight: bold;
}

#blogComment ul li .comment-ctime {
  color: #aaaaaa;
  font-size: 14px;
  margin-top: 10px;
}

#blogComment ul li .comment-content {
  font-size: 18px;
}

#blogComment ul li .comment-content p {
  margin: 10px 0px 0px 0px;
}

@media (max-width: 768px) {
  .addComment p {
    font-size: 24px;
    padding: 10px 20px;
  }

  .addComment input {
    height: 20px;
    margin: 5px 20px;
  }

  .addComment textarea {
    height: 120px;
    margin: 5px 20px;
    font-size: 14px;
  }

  .addComment button {
    width: 76px;
    margin: 10px 20px;
    font-size: 14px;
  }

  #blogComment ul li {
    padding: 8px 20px;
  }

  #blogComment ul li .comment-author img {
    width: 25px;
    height: 25px;
  }

  #blogComment ul li .comment-author {
    font-size: 14px;
  }

  #blogComment ul li .comment-ctime {
    font-size: 12px;
    margin-top: 10px;
  }

  #blogComment ul li .comment-content {
    font-size: 14px;
  }
}
</style>