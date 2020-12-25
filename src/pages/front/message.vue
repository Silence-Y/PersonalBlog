<template>
  <div class="content">
    <div class="content_left">
      <div id="comment">
        <h1>留言板</h1>
        <p>
          欢迎灌水交流，别看我长时间不发博，博主可一直都在线~
          <br />
          <br />友链只交换技术类个人博客。
          <br />
          <br />博主联系:MzcxNjA0Nzg1
          <br />
        </p>
      </div>

      <!-- 评论 -->
      <Comment></Comment>
    </div>

    <!-- 右侧内容 -->
    <Right></Right>
  </div>
</template>

<script>
import Right from "../../components/front/right";
import Comment from "../../components/front/comment";
export default {
  components: {
    Right,
    Comment
  }
};
</script>

<style>
@import "../../assets/css/front/comment.css";
h1,
h2,
h3,
h4,
h5,
h6 {
  clear: both;
  color: #212121;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
}

#comment {
  width: 100%;
  background: white;
  height: 300px;
  margin: 40px 0px 0px 0px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.15);
}

#comment h1 {
  text-align: center;
  font-size: 36px;
  padding: 30px 20px 30px 20px;
}

#comment h1::after {
  position: absolute;
  width: 70px;
  display: block;
  height: 2px;
  left: 50%;
  margin-left: -35px;
  top: 130px;
  background-color: #009688;
  content: "";
}

#comment p {
  padding: 20px 30px 20px 30px;
}
</style>