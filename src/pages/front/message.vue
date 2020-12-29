<template>
  <div>
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