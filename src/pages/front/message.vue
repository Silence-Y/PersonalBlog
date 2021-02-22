<template>
  <div>
    <div id="comment">
      <h1>留言板</h1>
      <p>
        欢迎大家给我留言
        <br />
        <br />友链只交换技术类个人博客
        <br />
      </p>
    </div>
    <!-- 评论 -->
    <Comment></Comment>
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

<style scoped>
@import "../../assets/css/front/message.css";
</style>