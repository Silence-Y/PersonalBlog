<template>
  <div class="content">
    <div class="content_left">
      <div id="comment">
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
</style>